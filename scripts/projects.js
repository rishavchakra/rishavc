'use strict';

const e = React.createElement;

// Easily repeatable react component for a Code Project item
class Project extends React.Component {
	constructor(props) {
		super(props);
		this.title = props.title;
		this.languages = props.languages;
		this.desc = props.desc;
	}

	render() {
		return (
			<div className="project">
				<div className="project_title">
					<h3>{this.title}</h3>
					<h4>Written in {this.languages}</h4>
				</div>
				<p className="project_desc">{this.desc}</p>
				<hr/>
			</div>
		);
	}
}

// Language names
const cpp = 'C++'
const rs = 'Rust'
const py = 'Python'
const ogl = 'OpenGL'
const cogl = cpp + ' and ' + ogl

const projects = [
	{ title: 'Raycasting engine', lang: cogl, desc: '3D-replicating raycast engine, resembling Doom and Wolfenstein 3D' },
	{ title: 'BrainF Language interpreter', lang: rs, desc: 'An interpreter for BrainF, the infamously unreadable code-golf language' },
	{ title: 'ICESat-2 Imaging and Database tool', lang: py, desc: 'LiDAR point-cloud data science and an SQL database tool with a Tkinter GUI' },
	{ title: 'Machine Learning Image Classification', lang: py, desc: 'Convolutional Neural Network for image recognition using the CIFAR-10 dataset' },
	{ title: '2D Game Engine', lang: rs, desc: 'In progress: A 2D Game engine library to be used with Rust, using SDL2 windowing and WGPU graphics' },
	{ title: 'Softbody Physics Simulation', lang: cogl, desc: 'Physics playground for softbody objects, based on a spring-mass model' }
]

for (let ind = 0; ind < Math.min(document.getElementsByClassName('projects').length, projects.length); ind++) {
	const proj = projects[ind];
	ReactDOM.render(
		React.createElement(Project, { title: proj.title, languages: proj.lang, desc: proj.desc }),
		document.getElementsByClassName('projects')[ind]
	);
}