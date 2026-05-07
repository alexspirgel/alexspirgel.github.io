import waitForElement from './wait-for-element.js';
const transitionAuto = require('@alexspirgel/transition-auto');

function isMobilveNavigation() {
	return (window.matchMedia && window.matchMedia('(max-width: 400px)').matches);
}

function getNavigationState() {
	let state = document.querySelector('.header-navigation').getAttribute('data-state');
	return state ? state : 'closed';
}

function setNavigationState(state) {
	if (state == 'opened') {
		document.querySelector('.header-navigation').setAttribute('data-state', 'opening');
		transitionAuto({
			element: document.querySelector('.header-navigation__items-wrapper'),
			property: 'height',
			value: 'auto',
			onComplete: () => {
				document.querySelector('.header-navigation').setAttribute('data-state', 'opened');
			}
		});
	}
	else {
		document.querySelector('.header-navigation').setAttribute('data-state', 'closing');
		transitionAuto({
			element: document.querySelector('.header-navigation__items-wrapper'),
			property: 'height',
			value: 0,
			onComplete: () => {
				document.querySelector('.header-navigation').setAttribute('data-state', 'closed');
			}
		});
	}
}

function toggleNavigation() {
	if (getNavigationState() == 'closing'
	|| getNavigationState() == 'closed') {
		setNavigationState('opened');
	}
	else {
		setNavigationState('closed');
	}
}

waitForElement('.main').then((element) => {
	document.querySelector('.header-navigation__toggle').addEventListener('click', toggleNavigation);
	for (element of document.querySelectorAll('.header-navigation__link')) {
		element.addEventListener('click', toggleNavigation);
	}
});