import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './Navbar.module.css'
function Navbar({allCountries, setFiltered, filtered}) {
	const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
	// const [nameSearch, setNameSearch] = useState('')
	// const [regionSearch, setRegionSearch] = useState('')

	function filterNameSearch(item) {
		// setNameSearch(item)
		if (item !== '') {
			const filteredCountries = allCountries.filter(country =>
				country.name.common.toLowerCase().includes(item.toLowerCase())
			)
			setFiltered(filteredCountries)
		} else {
			setFiltered(allCountries)
		}
	}
	function filterRegionSearch(item) {
		// setRegionSearch(item)
		if (item !== '') {
			const filteredCountries = allCountries.filter(country =>
				country.region.toLowerCase().includes(item.toLowerCase())
			)
			setFiltered(filteredCountries)
		} else {
			setFiltered(allCountries)
		}
	}

	// console.log('search: ', search)
	console.log('filtered: ', filtered)
	// console.log('regionSearch: ', regionSearch)
	// console.log('nameSearch: ', nameSearch)
	return (
		<nav className={styles.navbar}>
			<div className={styles.searchContainer}>
				<input
					className={styles.input}
					type='text'
					placeholder='Search country...'
					onChange={e => filterNameSearch(e.target.value)}
				/>
				<FontAwesomeIcon
					className={styles.icon}
					icon={faMagnifyingGlass}
					style={{fontSize: '1.3rem'}}
				/>
			</div>
			<div className={styles.selectContainer}>
				<select
					className={styles.select}
					onChange={e => filterRegionSearch(e.target.value)}>
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
