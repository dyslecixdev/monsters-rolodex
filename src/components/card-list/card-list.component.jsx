import {Component} from 'react';

// Monster card component.
class CardList extends Component {
	render() {
		const {monsters} = this.props; // Destructures monsters from props.

		return (
			<div>
				{/* Maps over each monster in the filteredMonsters array, then creates an h1 element for each one */}
				{monsters.map(monster => (
					<h1 key={monster.id}>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default CardList;
