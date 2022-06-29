import React from 'react';
import personService from '../services/persons';

const Numbers = ({ setPersons, person }) => {
	const deleteHandler = () => {
		window.confirm(`Delete ${person.name} ?`);

		personService.deletePerson(person.id);

		setPersons((prevPersons) =>
			prevPersons.filter((prevPerson) => prevPerson.id !== person.id)
		);
	};
	return (
		<li>
			{person.name} - {person.number}{' '}
			<button onClick={deleteHandler}>delete</button>
		</li>
	);
};

export default Numbers;
