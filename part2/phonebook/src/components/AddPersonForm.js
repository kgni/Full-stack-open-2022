import React from 'react';
import Input from './Input';

const AddPersonForm = ({
	persons,
	setPersons,
	newName,
	setNewName,
	newNumber,
	setNewNumber,
}) => {
	const addPersonHandler = (event) => {
		event.preventDefault();

		// if any field is empty, alert the user:

		if (newName.trim() === '' || newNumber.trim() === '') {
			alert(`Fields cannot be empty`);
			return;
		}

		// parse newNumber from string to a number:

		const number = Number(newNumber);

		// check if number is a number
		if (!number) {
			alert(`Number needs to be a number`);
			return;
		}

		// create array of only the names and numbers in our phonebook lower casing all names so we cannot add the same name with different casing)
		const names = persons.map((person) => person.name.toLowerCase());
		const numbers = persons.map((person) => person.number);

		// check if name is already in the list. If it is we alert and return to stop execution of the function
		if (names.includes(newName.toLowerCase())) {
			alert(`${newName} is already added to the phonebook`);
			return;
		}

		if (numbers.includes(number)) {
			alert(`${number} is already added to the phonebook`);
			return;
		}

		const personObject = {
			name: newName,
			number: number,
			id: persons.length + 1,
		};

		setPersons((prevPersons) => {
			return [...prevPersons, personObject];
		});

		console.log(`${newName} - ${number} was added to the phonebook`);

		setNewName('');
		setNewNumber('');
	};

	return (
		<form onSubmit={addPersonHandler}>
			<h3>add a new</h3>
			<div>
				<Input
					labelText="name:"
					input={{
						id: 'name',
						type: 'text',
						value: newName,
						onChange: (event) => setNewName(event.target.value),
					}}
				/>
				<Input
					labelText="number"
					input={{
						id: 'number',
						type: 'number',
						value: newNumber,
						onChange: (event) => setNewNumber(event.target.value),
					}}
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default AddPersonForm;
