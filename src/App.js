import {useState, useEffect} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

function App() {
	// Initializes this component's states.
	const [monsters, setMonsters] = useState([]); // monsters is the value that holds the state which is intialized as an empty array, and setMonsters is used to change the value of monsters.
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	const [searchField, setSearchField] = useState('');

	// API data fetch.
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => setMonsters(data));
	}, []); // The array causes useEffect to run based on whatever value inside it changes, but if it's empty then it only runs once on componentDidMount.

	// Filters out the monsters using the searchField string.
	useEffect(() => {
		const newFilteredMonsters = monsters.filter(monster => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	// When the input is changed, searchField changes to be the input's element's target's value, then sets it in its state using the shorthand for {searchField: searchField}.
	const onSearchChange = e => {
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
