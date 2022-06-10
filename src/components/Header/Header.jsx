import styles from './Header.module.css'
function Header() {
	return (
		<header className={styles.header}>
			<h3>Where in the world?</h3>
			<div className={styles.toggleContainer}>
				<p>icon</p>
				<p>Dark mode</p>
			</div>
		</header>
	)
}

export default Header
