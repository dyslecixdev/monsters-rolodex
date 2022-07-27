import {Monster} from '../../App';

import './card.styles.css';

// CardProps type with its value and its type.
type CardProps = {
	monster: Monster;
};

// Monster card component.
// Gives props a type.
function Card(props: CardProps) {
	const {monster} = props;
	const {id, name, email} = monster;

	return (
		<div className='card-container' key={id}>
			<img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name} monster`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;
