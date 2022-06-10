import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';
import Header from '../Header/Header'

import './App.css'

function App() {
	const [allCountries, setAllCountries] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('https://restcountries.com/v3.1/all');
			const data = await res.json();
			setAllCountries(data);
		}
		fetchData();
	}, [])

	if (!allCountries) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<Header />
			{allCountries.map((country) => {
				return <Card key={country.name.common} props={country}/>
			})
			}
		</div>
	)
}

export default App;
