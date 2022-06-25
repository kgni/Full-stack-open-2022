import React from 'react';
import Part from './Part';

const Content = (props) => {
	const partList = props.parts.map((part) => {
		return <Part key={part.id} part={part} />;
	});

	const total = props.parts.reduce((acc, c) => acc + c.exercises, 0);
	return (
		<div>
			{partList}
			<p>
				<strong>total of {total} exercises</strong>
			</p>
		</div>
	);
};

export default Content;
