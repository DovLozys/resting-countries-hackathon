import styles from './Card.module.css'

function Card(props) {
	return (
		// what we will want displayed:
		// flag image, png format
		// capital name
		// region name
		// population

		//TODO: fix the props.id
		<article className={styles.card} key={props.name.common}>
			<img src={props.flags.png} alt={props.flag} />
			<h2>{props.name.common}</h2>
			<p>Region: {props.region}</p>
			<p>Capital: {props.capital[0]}</p>
			<p>Population: {props.population}</p>
		</article>
	);
}

export default Card;
