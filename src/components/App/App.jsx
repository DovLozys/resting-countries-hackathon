import {useEffect, useState} from 'react'

import Card from '../Card/Card';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

import style from './App.module.css';

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
			<main className={style.container}>
				{filtered.length &&
					filtered.map(country => {
					  return <Card key={country.name.common} props={country} />
				})}
			</main>
		</div>
	)
}

export default App
