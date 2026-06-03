import waitForElement from './wait-for-element.js';
const transitionAuto = require('@alexspirgel/transition-auto');

function isMobileNavigation() {
	return (window.matchMedia && window.matchMedia('(max-width: 425px)').matches);
}

function getNavigationState() {
	let state = document.querySelector('.header-navigation').getAttribute('data-state');
	return state ? state : 'closed';
}

function setNavigationState(state) {
	if (state == 'opened') {
		transitionAuto({
			element: document.querySelector('.header-navigation__items-wrapper'),
			property: 'height',
			value: 'auto',
			onComplete: (options) => {
				document.querySelector('.header-navigation').setAttribute('data-state', 'opened');
				options.element.style.height = '';
			}
		});
		document.querySelector('.header-navigation').setAttribute('data-state', 'opening');
	}
	else {
		transitionAuto({
			element: document.querySelector('.header-navigation__items-wrapper'),
			property: 'height',
			value: 0,
			onComplete: (options) => {
				document.querySelector('.header-navigation').setAttribute('data-state', 'closed');
				options.element.style.height = '';
			}
		});
		document.querySelector('.header-navigation').setAttribute('data-state', 'closing');
	}
}

function toggleNavigation() {
	if (isMobileNavigation()) {
		if (getNavigationState() == 'closing'
		|| getNavigationState() == 'closed') {
			setNavigationState('opened');
		}
		else {
			setNavigationState('closed');
		}
	}
}

waitForElement('.main').then((element) => {
	document.querySelector('.header-navigation__toggle').addEventListener('click', toggleNavigation);
	for (element of document.querySelectorAll('.header-navigation__link')) {
		element.addEventListener('click', toggleNavigation);
	}
});