function skill_hover(category) {
	let skill_list;
	let non_assoc_apps = [];
	if (category === 0) {
		skill_list = document.getElementById('3d_details');
		non_assoc_apps = ['krita', 'resolve', 'photoshop', 'premiere', 'vscode', 'intellij'];
	}
	if (category === 1) {
		skill_list = document.getElementById('2d_details');
		non_assoc_apps = ['blender', 'resolve', 'premiere', 'vscode', 'intellij' ];
	}
	if (category === 2) {
		skill_list = document.getElementById('vid_details');
		non_assoc_apps = ['blender', 'krita', 'vscode', 'intellij'];
	}
	// I don't know how to make it scale smoothly...
	// I'm not sure if it's even possible without a lot of JS
	skill_list.style.lineHeight = '2rem';
	skill_list.style.transform = 'scaleY(1)';
	non_assoc_apps.forEach(element => {
		let app = document.getElementById(element);
		app.style.opacity = '0.2';
	});
}

function skill_unhover() {
	let skill_lists = document.getElementsByClassName('art_details');
	for(let i = 0; i < skill_lists.length; i++) {
		skill_lists[i].style.lineHeight = '0';
		skill_lists[i].style.transform = 'scaleY(0)';
	};

	let art_apps = document.getElementById('art_programs');
	let children = art_apps.children;
	for(let i = 0; i < children.length; i++) {
		children[i].style.opacity = '1';
	};
}