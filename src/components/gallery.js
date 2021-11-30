import React, { useState } from 'react'

const imgs = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i'
];
const numImgs = 4;
function Gallery() {
	const [imgInd, setImgInd] = useState(0);

	function nextImg(e) {
		setImgInd((imgInd + 1) % numImgs)
	}
	function prevImg(e) {
		setImgInd((imgInd - 1 + numImgs) % numImgs)
	}

	return (<div className="gallery">
		<button onClick={prevImg} className="galleryButton">&#x1438;</button>
		{imgs.map((imgPath, ind) => {
			if(ind >= imgInd && ind < imgInd+numImgs) {
				return <p>{imgPath}</p>
			}
		})}
		<button onClick={nextImg} className="galleryButton">&#x1433;</button>
	</div>);
}

export default Gallery;