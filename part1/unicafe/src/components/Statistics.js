import React from 'react';
import StatisticsLine from './StatisticsLine';
const Statistics = ({ good, neutral, bad }) => {
	const all = good + neutral + bad;
	const average = ((good - bad) / all || 0).toFixed(2);
	const positive = ((good / all) * 100).toFixed(2);

	return (
		<>
			<h2>statistics</h2>
			{all === 0 ? (
				<p>No feedback given</p>
			) : (
				<table>
					<tbody>
						<StatisticsLine text="good" value={good} />
						<StatisticsLine text="neutral" value={neutral} />
						<StatisticsLine text="bad" value={bad} />
						<StatisticsLine text="all" value={all} />
						<StatisticsLine text="average" value={average} />
						<StatisticsLine text="positive" value={positive} sign="%" />
					</tbody>
				</table>
			)}
		</>
	);
};

export default Statistics;
