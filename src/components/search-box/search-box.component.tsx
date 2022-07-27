import {ChangeEventHandler} from 'react';

import './search-box.styles.css';

// SearchBoxProps type with its values and their resepctive types.
type SearchBoxProps = {
	className: string;
	placeholder: string;
	onChangeHandler: ChangeEventHandler<HTMLInputElement>; // Shorthand version of ChangeEvent in App.tsx.
};

// Input field component.
// Gives props a type.
function SearchBox(props: SearchBoxProps) {
	const {placeholder, className, onChangeHandler} = props;

	return (
		<input
			type='search'
			placeholder={placeholder}
			className={className}
			onChange={onChangeHandler}
		/>
	);
}

export default SearchBox;
