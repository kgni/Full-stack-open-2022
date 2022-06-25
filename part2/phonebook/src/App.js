import { useState } from 'react';
import AddPersonForm from './components/AddPersonForm';
import Numbers from './components/Numbers';
import Filter from './components/Filter';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterName, setFilterName] = useState('');

	// creating filtering condition. If filterName is empty, then the value is falsy which means we use the entire array of persons.
	// Else we filter the array to contain the names that includes what is in the input.

	const personsToShow = filterName
		? persons.filter((person) =>
				person.name.toLowerCase().includes(filterName.toLowerCase())
		  )
		: persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				input={{
					id: 'filter',
					type: 'text',
					value: filterName,
					onChange: (event) => setFilterName(event.target.value),
				}}
			/>

			<AddPersonForm
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
			/>
			{/* <div>debug: {newName}</div> */}
			<h2>Numbers</h2>
			<ul>
				{personsToShow.map((person) => (
					<Numbers key={person.id} person={person} />
				))}
			</ul>
		</div>
	);
};

export default App;
