import langImages from '../code/github';
function HomeCode() {
    return (
        <div id="home-code-section">

            <div className="home-code-experience-box borderbox">
                <h3>Experience</h3>
                <img className="home-code-experience-arl" src="https://wwwext.arlut.utexas.edu/sbcex/img/ARL_logo_min.png" />
            </div>

            <div className="home-code-languages-box borderbox">
                <h3>Languages</h3>
                {/*Images of all the languages I know*/}
                <div className="home-code-languages">

                    {Object.keys(langImages).map((imgsrc) =>
                        <img src={langImages[imgsrc]} key={imgsrc}
                        className="home-code-lang-img" />
                    )}

                </div>
            </div>

        </div>
    )
}

export default HomeCode;
