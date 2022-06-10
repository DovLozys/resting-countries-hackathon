import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import styles from './Navbar.module.css'
function Navbar({allCountries, setFiltered, filtered}) {
	const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
	const [search, setSearch] = useState('')

	function filterSearch(item) {
		setSearch(item)
		if (search !== '') {
			const filteredCountries = allCountries.filter(country =>
				country.name.common.toLowerCase().includes(search.toLowerCase())
			)
			setFiltered(filteredCountries)
		} else {
			setFiltered(allCountries)
		}
	}

	console.log('search: ', search)
	console.log('filtered: ', filtered)
	return (
		<nav className={styles.navbar}>
			<div className={styles.searchContainer}>
				<input
					className={styles.input}
					type='text'
					value={search}
					placeholder='Search country...'
					onChange={e => filterSearch(e.target.value)}
				/>
				<FontAwesomeIcon
					className={styles.icon}
					icon={faMagnifyingGlass}
					style={{fontSize: '1.3rem'}}
				/>
			</div>
			<div className={styles.selectContainer}>
				<select className={styles.select}>
					<option className={styles.option} value=''>
						Filter by Region
					</option>
					{options.map(item => (
						<option className={styles.option} key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
		</nav>
	)
}

export default Navbar
