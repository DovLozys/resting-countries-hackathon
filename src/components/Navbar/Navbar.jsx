import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.css';

function Navbar({ allCountries, setFiltered }) {
	const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

	// filter countries by input box text
	function filterNameSearch(inputText) {
		if (inputText !== '') {
			const filteredCountries = allCountries.filter(country =>
				country.name.common.toLowerCase().includes(inputText.toLowerCase())
			);
			setFiltered(filteredCountries);
		} else {
			setFiltered(allCountries);
		}
	}

	// filter countries by option selected in dropdown
	function filterRegionSearch(dropdownOption) {
		if (dropdownOption !== '') {
			const filteredCountries = allCountries.filter(country =>
				country.region.toLowerCase().includes(dropdownOption.toLowerCase())
			);
			setFiltered(filteredCountries);
		} else {
			setFiltered(allCountries);
		}
	}

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
	);
}

export default Navbar;
