import {Component} from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';

// Monster card component.
class CardList extends Component {
	render() {
		const {monsters} = this.props; // Destructures monsters from props.

		return (
			<div className='card-list'>
				{/* Maps over each monster in the filteredMonsters array, then creates an h1 element for each one */}
				{monsters.map(monster => {
					return <Card monster={monster} />;
				})}
			</div>
		);
	}
}

export default CardList;
