import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './Navbar.module.css'
function Navbar() {
	const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
	return (
		<nav className={styles.navbar}>
			<div className={styles.searchContainer}>
				<input
					className={styles.input}
					type='text'
					placeholder='Search country...'
				/>
				<FontAwesomeIcon
					className={styles.icon}
					icon={faMagnifyingGlass}
					style={{fontSize: '1.3rem'}}
				/>
			</div>
			<div className={styles.selectContainer}>
				<select>
					<option value=''>Filter by Region</option>
					{options.map(item => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
		</nav>
	)
}

export default Navbar
