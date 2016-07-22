var s = require('./main.css');

module.exports = function() {
	var element = document.createElement('h1');

	element.innerHTML = 'Halo dunia';
	element.className = s.blueBgWhiteText;

	return element;
}