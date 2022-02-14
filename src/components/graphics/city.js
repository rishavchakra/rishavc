import React from 'react'

// Not currently used
function CityLevel(props) {
	let bldgs = []

	for (let i = 0; i < props.bldgs; i++) {
		// Todo: replace with proper random statements
		const xpos = Math.random()
		const width = Math.random()
		const height = Math.random()
		bldgs.push([xpos, width, height])
	}

	// Sorts the buildings by their x position
	// Todo: test the sorting order
	bldgs = bldgs.sort((bldg1, bldg2) => bldg1[0] - bldg2[0])

	let points = [[-1, 0]] // The corners of the buildings visible in the silhouette

	let curY = 0
	bldgs.forEach(bldg => {
		if (bldg[2] > curY) {
			curY = bldg[2]

		}
	});

	return (<>
	</>)
}

/**
 * 
 * @param {bldgs: number, levels: number} props 
 * bldgs: the number of buildings per level
 * levels: the number of levels 
 * @returns a React Component of the R3F Canvas
 */
function CityScene(props) {
	let levels = []

	for(let i=0; i < props.levels; i++) {
		levels.push(
			<CityLevel buildings={props.bldgs}/>
		)
	}
	return (<>
		{levels.forEach(level => {
			return level
		})}
	</>)
}

export default CityScene;