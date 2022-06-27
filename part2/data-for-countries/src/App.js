import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FindCountries from './components/FindCountries';
function App() {
	const [countries, setCountries] = useState([]);

	// fetching the data and putting it into state
	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then((response) => {
			setCountries(response.data);
		});
	}, []);

	return (
		<div className="App">
			<FindCountries countries={countries} />
		</div>
	);
}

export default App;
