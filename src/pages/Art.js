import "./Art.scss";
import SynthwaveScene from "./../components/graphics/synthwave";

function Art() {
  return (
    <div className="App">
      <div className="render-canvas-container">
        <SynthwaveScene />
      </div>
      <div className="art-page" id="art-title-page">
        <div id='art-title-box'>
          <h1 id="art-title">Art</h1>
        </div>
        <h2 className="art-subtitles" id="art-anim">
          Animation
        </h2>
        <h2 className="art-subtitles" id="art-illustration">
          Illustration
        </h2>
        <h2 className="art-subtitles" id="art-painting">
          Painting
        </h2>
        <h2 className="art-subtitles" id="art-cgi">
          CGI
        </h2>
        <h2 className="art-subtitles" id="art-music">
          Instrumentals
        </h2>
        <h2 className="art-subtitles" id="composition">
          Composition
        </h2>
      </div>
    </div>
  );
}

export default Art;
