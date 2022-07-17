import {Component} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
	// Class component.
	constructor() {
		super();

		// Initializes the App's state.
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	// Executes after the component initializes below in render.
	componentDidMount() {
		// API data fetch.
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data =>
				this.setState(() => {
					return {monsters: data}; // Sets the API's data as the value to the monsters key in state.
				})
			);
	}

	// When the input is changed, searchField changes to be the input's element's target's value, then sets it in its state using the shorthand for {searchField: searchField}.
	onSearchChange = e => {
		const searchField = e.target.value.toLocaleLowerCase();
		this.setState(() => {
			return {searchField};
		});
	};

	// Executes after the component's constructor above.
	render() {
		const {monsters, searchField} = this.state; // Destructures the keys from state.
		const {onSearchChange} = this; // Destructures the function from this class component.
		// filteredMonsters takes the monsters array in state, filters out each monster (i.e. element) that has the same string as the one in the searchField (i.e. input), then returns an array.
		const filteredMonsters = monsters.filter(monster => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

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
}

export default App;
