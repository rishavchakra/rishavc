function Section(props) {
  
  return (
    <div className="section">
      <h1 className="section-title">{props.title}</h1>
      <div className={"section-body" + " " + props.img}>
        {props.children}
        {!props.noflavor && (
          <div className="section-redirect">
            <div className="section-redirect-cover"/>
            <h2 className="section-flavor">{props.flavor || "\u00BB"}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;
