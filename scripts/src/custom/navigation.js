import waitForElement from './wait-for-element.js';

function isMobilveNavigation() {
	return (window.matchMedia && window.matchMedia('(max-width: 400px)').matches);
}

function getNavigationState() {
	let state = document.querySelector('.header-navigation').getAttribute('data-state');
	return state ? state : 'closed';
}

function setNavigationState(state) {
	document.querySelector('.header-navigation').setAttribute('data-state', state);
}

function toggleNavigation() {
	if (getNavigationState() == 'closed') {
		setNavigationState('opened');
	}
	else {
		setNavigationState('closed');
	}
}

waitForElement('.header-navigation__toggle').then((element) => {
	element.addEventListener('click', toggleNavigation);
});