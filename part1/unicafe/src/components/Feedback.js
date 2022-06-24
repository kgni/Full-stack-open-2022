import React from 'react';
import Button from './Button';
import Statistics from './Statistics';
const Feedback = ({ incrementGood, incrementNeutral, incrementBad }) => {
	return (
		<>
			<h1>give feedback</h1>
			<Button onClick={incrementGood} title="good" />
			<Button onClick={incrementNeutral} title="neutral" />
			<Button onClick={incrementBad} title="bad" />
		</>
	);
};

export default Feedback;
