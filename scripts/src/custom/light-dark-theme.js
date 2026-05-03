import waitForElement from './wait-for-element.js';

function getTheme() {
	return document.documentElement.getAttribute('data-theme');
}

function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme(theme) {
	if (getTheme() == 'light') {
		setTheme('dark');
	}
	else {
		setTheme('light');
	}
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	setTheme('dark');
}
else {
	setTheme('light');
}

waitForElement('.header-theme-toggle__button').then((element) => {
	element.addEventListener('click', toggleTheme);
});