import { useState } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';
const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const incrementGood = () => {
		setGood(good + 1);
	};
	const incrementNeutral = () => {
		setNeutral(neutral + 1);
	};
	const incrementBad = () => {
		setBad(bad + 1);
	};

	return (
		<>
			<Feedback
				incrementGood={incrementGood}
				incrementNeutral={incrementNeutral}
				incrementBad={incrementBad}
			/>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
};

export default App;
