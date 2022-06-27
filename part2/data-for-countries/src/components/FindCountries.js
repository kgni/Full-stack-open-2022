import React, { useEffect, useState } from 'react';
import Input from './Input';
import Country from './Country';

const FindCountries = ({ countries }) => {
	const [inputValue, setInputValue] = useState('');
	const [oneCountry, setOneCountry] = useState(false);

	useEffect(() => {
		if (filteredCountries.length === 1) {
			setOneCountry(true);
		} else {
			setOneCountry(false);
		}
	}, [inputValue]);

	function onChangeInputHandler(e) {
		setInputValue(e.target.value);
	}

	const filteredCountries = countries.filter((country) => {
		return country.name.common.includes(inputValue);
	});

	return (
		<>
			<Input
				labelText="find countries"
				input={{
					type: 'text',
					id: 'find-countries',
					value: inputValue,
					onChange: onChangeInputHandler,
				}}
				s
			/>
			{filteredCountries.length === 1 && (
				<Country
					key={filteredCountries[0].name.common}
					country={filteredCountries[0]}
					oneCountry={oneCountry}
				/>
			)}
			{filteredCountries.length > 10 && (
				<p>Too many matches, specify another filter</p>
			)}
			{filteredCountries.length <= 10 &&
				filteredCountries.length > 1 &&
				filteredCountries.map((country) => (
					<Country
						oneCountry={oneCountry}
						key={country.name.common}
						country={country}
					/>
				))}
		</>
	);
};

export default FindCountries;
