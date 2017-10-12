"use strict";

const outputDiv = $('#productHolder');

const domString = (product) => {
	var productString = "";
		productString += `<div>`;
		productString += `<h1>${product.type}</h1>`;
		productString += `</div>`;
	writeToDom(productString);
};

const writeToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = domString;