import "./../styles/App.scss";

import Section from "../components/section";
import ContactForm from "../components/contact";
import {langImages} from "../components/github";

function Home() {
  return (
    <div className="App">
      <div className="name-page">
        <h1 className="name-title">Rishav Chakravarty</h1>
      </div>

      <div className="section-container">
        <Section
          id="about"
          title="About Me"
          img="bg-stacked-steps"
          noflavor={true}
        >

            <div id="home-about-section">
                <div className="home-about-pic">
                    <div className="pic-container borderbox">
                        <img src="img/me.jpeg" alt="Rishav" />
                    </div>
                </div>

                <div className="home-about-desc">
                    <div className="home-about-desc-box borderbox">
                        <h3>
                            Hi! I'm Rishav Chakravarty.
                        </h3>
                        <p>
                            I'm a student at Dartmouth College.
                        </p>
                    </div>
                </div>
            </div>

        </Section>

        <Section id="code" title="Code" img="bg-poly-grid">

            <div id="home-code-section">

                <div className="home-code-experience-box borderbox">
                    <h3>Experience</h3>
                </div>

                <div className="home-code-languages-box borderbox">
                    <h3>Languages</h3>
                    {/*Images of all the languages I know*/}
                    <div className="home-code-languages">

                        {Object.keys(langImages).map((imgsrc) =>
                            <img src={langImages[imgsrc]}
                            className="home-code-lang-img" />
                        )}

                    </div>
                </div>

            </div>

        </Section>

        <Section id="art" title="Art" img="bg-stacked-waves"></Section>

        <Section
          id="contact"
          title="Contact Me"
          noflavor={true}
          img="bg-stars"
        >
          <ContactForm />
        </Section>
      </div>
    </div>
  );
}

export default Home;
