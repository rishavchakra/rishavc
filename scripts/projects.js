'use strict';

const e = React.createElement;

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.languages = props.languages;
		this.desc = props.desc;
	}

	render() {
		return (
			<h3>{this.title}</h3>
		);
	}
}

// Language names
const cpp = 'C++'
const rs = 'Rust'
const py = 'Python'
const ogl = 'OpenGL'
const cogl = cpp + ', ' + ogl

const projects = [
	{ title: 'Raycasting engine', lang: cogl, desc: 'Raycasting description' },
	{ title: 'BrainF Language interpreter', lang: rs, desc: 'BrainF description' },
	{ title: 'ICESat-2 Imaging and Database tool', lang: py, desc: 'ICESat description' },
	{ title: 'Machine Learning Image Classification', lang: py, desc: 'Convolutional Neural Network using the CIFAR-10 dataset' },
	{ title: '2D Game Engine', lang: rs, desc: 'IN PROGRESS: A 2D Game engine with a physics system, ' },
	{ title: 'Softbody Physics Simulation', lang: cogl, desc: 'Physics playground for softbody objects, based on a spring-mass model' }
]

for (let ind = 0; ind < Math.min(document.getElementsByClassName('projects').length, projects.length); ind++) {
	const proj = projects[ind];
	ReactDOM.render(
		React.createElement(Project, { title: proj.title, languages: proj.lang, desc: proj.desc }),
		document.getElementsByClassName('projects')[ind]
	);
}