"use strict";

const outputDiv = $('#productHolder');

const domString = (product) => {
	var productString = "";
		productString += `<div class="col-sm-4">`;
		productString += `<h1>${product.name}</h1>`;
		productString += `<h1>${product.type}</h1>`;
		productString += `<h1>${product.category}</h1>`;
		productString += `</div>`;
	writeToDom(productString);
};

const writeToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = domString;