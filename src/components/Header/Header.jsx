import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
function Header() {
	return (
		<header className={styles.header}>
			<h3>Where in the world?</h3>
			<div className={styles.toggleContainer}>
				<FontAwesomeIcon icon={faMoon} />
				<FontAwesomeIcon icon={faSun} />
				<p>Dark mode</p>
			</div>
		</header>
	)
}

export default Header
