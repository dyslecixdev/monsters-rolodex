import Card from '../card/card.component';

import {Monster} from '../../App';

import './card-list.styles.css';

// CardListProps type with its value and its type.
type CardListProps = {
	monsters: Monster[];
};

// Monster card container component.
// Gives props a type.
function CardList(props: CardListProps) {
	const {monsters} = props;

	return (
		<div className='card-list'>
			{/* Maps over each monster in the filteredMonsters array, then creates an h1 element for each one */}
			{monsters.map(monster => {
				return <Card monster={monster} />;
			})}
		</div>
	);
}

export default CardList;
