function Section(props) {
	return(
		<div className="section">
			<h1 className="section-title">{props.title}</h1>
			{props.children}
		</div>
	)
}

export default Section