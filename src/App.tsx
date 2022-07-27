import {useState, useEffect, ChangeEvent} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import {getData} from './utils/data.utils';

import './App.css';

// Monster type with its values and their respective types.
export type Monster = {
	id: string;
	name: string;
	email: string;
};

function App() {
	// Initializes this component's states.
	const [monsters, setMonsters] = useState<Monster[]>([]); // Gives this useState's initial state the Monsters type as an array.
	const [filteredMonsters, setFilteredMonsters] = useState(monsters); // Typescript infers that this useState's initial state is an array from the above useState.
	const [searchField, setSearchField] = useState(''); // Typescript infers that this useState's initial state is a string because it was passed an empty string.

	// API data fetch.
	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users'); // States that users is an array (i.e. []) version of the Monster type with the included key:value pairs.
			setMonsters(users);
		};

		fetchUsers();
	}, []); // The array causes useEffect to run based on whatever value inside it changes, but if it's empty then it only runs once on componentDidMount.

	// Filters out the monsters using the searchField string.
	useEffect(() => {
		const newFilteredMonsters = monsters.filter(monster => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	// When the input is changed, searchField changes to be the input's element's target's value, then sets it in its state using the shorthand for {searchField: searchField}.
	const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	// What is shown in DOM.
	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				placeholder='search monsters'
				className='search-box'
				// Passes the onSearchChange function as props and renames it as onChangeHandler
				onChangeHandler={onSearchChange}
			/>
			{/* Passes filteredMonsters as props and renames it as monsters */}
			<CardList monsters={filteredMonsters} />
		</div>
	);
}

export default App;
