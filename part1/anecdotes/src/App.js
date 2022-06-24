import { useState } from 'react';

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
	];

	const [selected, setSelected] = useState(0);

	// declare votes state by creating an array with the length of the anecdotes, and using fill (0), to give every element in the array the value of 0.
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

	const setRandomIndex = () => {
		let randNum = Math.floor(Math.random() * anecdotes.length);
		setSelected(randNum);
	};

	const addVote = () => {
		setVotes((prevData) => {
			return prevData.map((el, index) => {
				if (index === selected) {
					return el + 1;
				} else {
					return el;
				}
			});
		});
	};

	// find index of anecdote with most votes:
	const mostVotesIndex = votes.indexOf(Math.max(...votes));

	return (
		<>
			<h2>Anecdote of the day</h2>
			<p>{anecdotes[selected]}</p>
			<p>has {votes[selected]} votes</p>
			<button onClick={addVote}>vote</button>
			<button onClick={setRandomIndex}>next anecdote</button>

			<h2>Anecdote with most votes</h2>
			{votes.every((vote) => vote === 0) ? (
				<p>No anecdotes has been voted yet.</p>
			) : (
				<>
					<p>{anecdotes[mostVotesIndex]}</p>
					<p>has {votes[mostVotesIndex]} votes</p>
				</>
			)}
		</>
	);
};

export default App;
