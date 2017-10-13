"use strict";

const dom = require('./dom');

let products = [];

const categoriesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/categories.json').done((data1) => {
			resolve(data1.categories);
		}).fail((error1) => {
			reject(error1);
		});
	});
};

const typesJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/products.json').done((data2) => {
			resolve(data2.types);
		}).fail((error2) => {
			reject(error2);
		});
	});
};

const productsJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/products.json').done((data3) => {
			resolve(data3.products);
		}).fail((error3) => {
			reject(error3);
		});
	});
};

var productGetter = () => {
	categoriesJSON().then((results) => {
		results.forEach((producto) => {
			products.push(producto);
		});
		return typesJSON();
	}).then((results2) => {
		results2.forEach((producto) => {
			products.push(producto);
		});
		return productsJSON();
	}).then((results3) => {
		results3.forEach((producto) => {
			products.push(producto);
		});
		console.log("products", products);
		makeProducts();
	});
};

const makeProducts = () => {
	products.forEach((producto) => {
		dom(producto);
	});
};

const initializer = () => {
	productGetter();
};

const getProducts = () => {
	return products;
};

module.exports = {initializer: initializer, getProducts: getProducts};