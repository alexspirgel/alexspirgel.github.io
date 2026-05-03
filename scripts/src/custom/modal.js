import MicroModal from 'micromodal';
const noScroll = require('@alexspirgel/no-scroll');

MicroModal.init({
	disableScroll: true,
	onShow: (modal) => {
		noScroll.disableScroll({
			outerElement: document.documentElement,
			innerElement: document.body,
			axis: 'y'
		});
	},
	onClose: (modal) => {
		noScroll.enableScroll({
			outerElement: document.documentElement,
			innerElement: document.body,
			axis: 'y'
		});
	},
});
// MicroModal.init({
// 	onShow: modal => console.info(`${modal.id} is shown`), // [1]
// 	onClose: modal => console.info(`${modal.id} is hidden`), // [2]
// 	openTrigger: 'data-custom-open', // [3]
// 	closeTrigger: 'data-custom-close', // [4]
// 	openClass: 'is-open', // [5]
// 	disableScroll: true, // [6]
// 	disableFocus: false, // [7]
// 	awaitOpenAnimation: false, // [8]
// 	awaitCloseAnimation: false, // [9]
// 	debugMode: true // [10]
// });