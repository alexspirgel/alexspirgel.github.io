import MicroModal from 'micromodal';
const noScroll = require('@alexspirgel/no-scroll');

MicroModal.init({
	disableScroll: true,
	awaitCloseAnimation: true,
	onShow: (modal) => {
		const title = modal.querySelector('.modal__title');
		if (title) {
			title.removeAttribute('tabindex'); // removed so the text is not actually tabbable
		}
		noScroll.disableScroll({
			outerElement: document.documentElement,
			innerElement: document.body,
			axis: 'y'
		});
	},
	onClose: (modal) => {
		const title = modal.querySelector('.modal__title');
		if (title) {
			title.setAttribute('tabindex', '0'); // added so modal is scrolled to the top when opened
		}
		noScroll.enableScroll({
			outerElement: document.documentElement,
			innerElement: document.body,
			axis: 'y'
		});
	},
});