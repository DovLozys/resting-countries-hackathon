import {useEffect, useState} from 'react'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

import './App.css'

function App() {
	const [allCountries, setAllCountries] = useState(null)
	const [filtered, setFiltered] = useState([])

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('https://restcountries.com/v3.1/all')
			const data = await res.json()
			setAllCountries(data)
			setFiltered(data)
		}
		fetchData()
	}, [])

	if (!allCountries) {
		return <div>Loading...</div>
	}
	console.log('allCountries: ', allCountries)
	console.log('filtered app: ', filtered)
	return (
		<div>
			<Header />
			<Navbar
				filtered={filtered}
				setAllCountries={setAllCountries}
				allCountries={allCountries}
				setFiltered={setFiltered}
			/>
			{
				//TODO: display a <Card> for each country, with allCountries.map() or some such
				filtered.length &&
					filtered.map(country => (
						<p key={country.car.cca2}>{country.name.common}</p>
					))
			}
		</div>
	)
}

export default App
