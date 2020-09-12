const getRandomItem = (array) => {
	const minimum = 0;
	const maximum = array.length - 1;
	const index = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
	return array[index];
}

const blockColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const blocksGrid = [
	'background', 'background', 'background', 'background', 'background', 'background', 'background', 'background', 'background',
	'background', 'background', 'background', 'background', 'background', 'background', 'background', 'background', 'background',
	'background', 'background', 'background', 'text',       'text',       'text',       'background', 'background', 'background',
	'background', 'background', 'text',       'background', 'background', 'text',       'background', 'text',       'text',
	'background', 'background', 'text',       'text',       'text',       'text',       'background', 'background', 'background',
	'background', 'background', 'text',       'background', 'background', 'text',       'text',       'text',       'background',
	'background', 'background', 'text',       'background', 'background', 'text',       'background', 'background', 'background',
	'background', 'background', 'background', 'background', 'background', 'background', 'background', 'background', 'background',
	'background', 'background', 'background', 'background', 'background', 'background', 'background', 'background', 'background',
];

const logoElement = document.querySelector('.logo__blocks');
for (let i = 0; i < blocksGrid.length; i++) {
	const block = document.createElement('div');
	block.classList.add('logo__block');
	block.classList.add(blocksGrid[i]);
	block.classList.add(getRandomItem(blockColors));
	logoElement.append(block);
}
logoElement.addEventListener('transitionend', (event) => {
	if (event.target.classList.contains('logo__block')) {
		event.target.classList.remove(...blockColors);
		event.target.classList.add(getRandomItem(blockColors));
	}
});