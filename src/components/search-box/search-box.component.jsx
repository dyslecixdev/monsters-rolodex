import './search-box.styles.css';

// Input field component.
function SearchBox({placeholder, className, onChangeHandler}) {
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
