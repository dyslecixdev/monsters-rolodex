import {Component} from 'react';

import './App.css';

class App extends Component {
	// Class component.
	constructor() {
		super();

		this.state = {
			// Initializes the App's state.
			monsters: []
		};
	}

	componentDidMount() {
		// Executes after the component initializes below in render.
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

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map(monster => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
