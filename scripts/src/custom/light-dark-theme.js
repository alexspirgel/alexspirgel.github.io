function waitForElement(selector) {
	return new Promise((resolve) => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}
		const observer = new MutationObserver((mutations) => {
			if (document.querySelector(selector)) {
				observer.disconnect();
				resolve(document.querySelector(selector));
			}
		});
		observer.observe(document.documentElement, {
			childList: true,
			subtree: true,
		});
	});
}

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

waitForElement('.theme__toggle-button').then((element) => {
	element.addEventListener('click', toggleTheme);
});