import { useState } from "react";

const images = {
    'me': 'img/me.jpeg',
    'darty': 'img/darty.jpeg'
}

function HomeAbout() {
    let [curImg, setCurImg] = useState('me');

    return (
        <div id="home-about-section">
            <div className="home-about-pic">
                <div className="pic-container borderbox">
                    <img src={images[curImg]} alt="Rishav" />
                </div>
            </div>

            <div className="home-about-desc">
                <div className="home-about-desc-box borderbox">
                    <h3>
                        Hi! I'm <span onMouseEnter={console.log('beep')}>Rishav Chakravarty</span>.
                    </h3>
                    <p>
                        I'm a student at <span onMouseEnter={console.log('boop')}>Dartmouth College</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout;
