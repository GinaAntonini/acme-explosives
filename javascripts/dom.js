"use strict";

const data = require('./data');

const outputDiv = $('#productHolder');

const domString = (product) => {
	var productString = "";
		productString += `<div class="col-sm-4 productCard">`;
		productString += `<h2 class="productName">${product.name}</h1>`;
		productString += `<h2 class="productType">${product.typeName}</h1>`;
		productString += `<h2 class="productCategory">${product.categoryName}</h1>`;
		productString += `<h2 class="productDescription">${product.description}</h1>`;
		productString += `</div>`;
	writeToDom(productString);
};

const writeToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = {domString};