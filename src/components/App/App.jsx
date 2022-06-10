import {useEffect, useState} from 'react'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

import './App.css'

function App() {
	const [allCountries, setAllCountries] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const res = await fetch('https://restcountries.com/v3.1/all')
			const data = await res.json()
			setAllCountries(data)
		}
		fetchData()
	}, [])

	if (!allCountries) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<Header />
			<Navbar />
			{
				//TODO: display a <Card> for each country, with allCountries.map() or some such
				allCountries[0].name.common
			}
		</div>
	)
}

export default App
