import React from 'react';

const Input = ({ input, labelText }) => {
	return (
		<>
			<div className="input">
				<label htmlFor={input.id}>{labelText}</label>
				<input
					onChange={input.onChange}
					type={input.type}
					id={input.id}
					value={input.value}
				/>
			</div>
		</>
	);
};

export default Input;
