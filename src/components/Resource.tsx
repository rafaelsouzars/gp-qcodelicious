import './style.css';

export function Resource(props) {
	return (
		<a href={props.href} target="_blank" rel="noopener noreferrer" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}