import {Component} from 'react';

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

		console.log('constructor');
	}

	// Executes after the component initializes below in render.
	componentDidMount() {
		console.log('componentDidMount');

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data =>
				this.setState(
					() => {
						return {monsters: data}; // Sets the API's data as the value to the monsters key in state.
					},
					() => {
						console.log(this.state); // This callback function executes only after the above callback function is done.
					}
				)
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
		console.log('render');

		const {monsters, searchField} = this.state; // Destructures the keys from state.
		const {onSearchChange} = this; // Destructures the function from this class component.
		// filteredMonsters takes the monsters array in state, filters out each monster (i.e. element) that has the same string as the one in the searchField (i.e. input), then returns an array.
		const filteredMonsters = monsters.filter(monster => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className='App'>
				<input
					type='search'
					placeholder='Search for monsters'
					className='search-box'
					onChange={onSearchChange}
				/>
				{/* Maps over each monster in the filteredMonsters array, then creates an h1 element for each one */}
				{filteredMonsters.map(monster => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
