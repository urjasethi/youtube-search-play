import React from 'react';

const Search = (props) => {
	let inputText = '';
	return (
		<div className='navbar navbar-light bg-light'>
			<form onSubmit={(e) => e.preventDefault()} className='form-inline mx-auto'>
				<input
					className='text_search'
					onChange={(e) => {
						inputText = e.target.value;
					}}
				/>
				<button
					className='button_search'
					onClick={() => props.onSearchClick(inputText)}
					type='submit'
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Search; 