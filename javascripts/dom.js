"use strict";

const data = require('./data');

const outputDiv = $('#productHolder');

const domString = (product) => {
	var productString = "";
		productString += `<div class="col-sm-4 productCard">`;
		productString += `<h1 class="productName">${product.name}</h1>`;
		productString += `<h2 class="productType">${product.type}</h1>`;
		productString += `<h2 class="productCategory">${product.category}</h1>`;
		productString += `<h2 class="productDescription">${product.description}</h1>`;
		productString += `</div>`;
	writeToDom(productString);
};

const writeToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = {domString};