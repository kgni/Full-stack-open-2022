import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Country = ({ country, oneCountry }) => {
	const [isShown, setIsShown] = useState(false);
	// TODO setting the weather to false initially, so we don't render our components without having fetched anything. (this will result in an error) - Maybe we should lift up the state, but I'm not sure how this can be done, when we want to fetch for specific countries, could we maybe run our fetch inside of a map in the FindCountries when we are filtering the countries? Maybe we should add a small delay when typing where we are not actually fetching (so that we only fetch some milliseconds after the user has stopped typing)
	const [weather, setWeather] = useState(false);
	let languages = [];
	// The languages prop is an object, where the values of the keys in the object, is the actual language. We loop through the object and push the value to an array
	for (let language in country.languages) {
		languages.push(country.languages[language]);
	}

	// console.log(country?.capitalInfo.latlng[0], country?.capitalInfo.latlng[1]);

	useEffect(() => {
		async function getWeather() {
			// const latLonResponse = await axios.get();
			try {
				// Not every country has this field with latlon for their capital, therefore we will use the GEO api to fetch the lat and lon for capitals
				// const [lat, lon] = country.capitalInfo.latlng;
				// const [lat, lon] =
				const latLonResponse = await axios.get(
					`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
				);

				const { lat, lon } = latLonResponse.data[0];

				// const lat = await latLonData[0].lat;
				// const lon = await latLonData[0].lon;
				const weatherResponse = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
				);

				const weatherData = await weatherResponse.data;
				setWeather(weatherData);
			} catch (e) {
				setWeather(false);
			}
		}

		getWeather();
	}, []);

	let countriesShown;

	if (oneCountry) {
		countriesShown = (
			<div className="country-info">
				<h2>{country.name.common}</h2>
				<p>capital {country.capital}</p>
				<p>area {country.area}</p>

				<h3>languages:</h3>
				<ul>
					{/* taking our created languages array, and mapping over it creating a list item on each iteration with the language */}
					{languages.map((language) => (
						<li key={language}> {language}</li>
					))}
				</ul>
				<img src={country.flags.png || country.flags.svg} alt="flag" />
				{!weather && (
					<>
						<h3>Weather</h3>
						<p>Could not gether weather data</p>
					</>
				)}
				{weather && (
					<>
						<h3>Weather in {country.capital}</h3>

						<p>temperature: {weather.main?.temp} celcius</p>
						<img
							src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt=""
						/>

						<p>wind: {weather?.wind.speed} m/s</p>
					</>
				)}
			</div>
		);
	} else {
		countriesShown = (
			<>
				<div className="country">
					<span>{country.name.common}</span>
					<button onClick={() => setIsShown(!isShown)}>
						{isShown ? 'Hide' : 'Show'}
					</button>
				</div>

				{isShown && (
					<div className="country-info">
						<h2>{country.name.common}</h2>
						<p>capital {country.capital}</p>
						<p>area {country.area}</p>

						<h3>languages:</h3>
						<ul>
							{/* taking our created languages array, and mapping over it creating a list item on each iteration with the language */}
							{languages.map((language) => (
								<li key={language}> {language}</li>
							))}
						</ul>
						<img src={country.flags.png || country.flags.svg} alt="flag" />
						{!weather && (
							<>
								<h3>Weather</h3>
								<p>Could not gether weather data</p>
							</>
						)}
						{weather && (
							<>
								<h3>Weather in {country.capital}</h3>

								<p>temperature: {weather.main?.temp} celcius</p>
								<img
									src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
									alt=""
								/>

								<p>wind: {weather?.wind.speed} m/s</p>
							</>
						)}
					</div>
				)}
			</>
		);
	}

	return <>{countriesShown}</>;
};

export default Country;
