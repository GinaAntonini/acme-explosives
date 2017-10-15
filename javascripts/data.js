"use strict";

const dom = require('./dom');

let categories = [];
let types = [];
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
		$.ajax('./db/types.json').done((data2) => {
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


var explosivesGetter = () => {
	categoriesJSON().then((catResults) => {
		catResults.forEach((category) => {
			categories.push(category);
		});
		console.log("categories", categories);
		return typesJSON();
	}).then((typeResults) => {
		typeResults.forEach((type) => {
			types.push(type);
		});
		console.log("types", types);
		return productsJSON();
	}).then((productResults) => {
		productResults.forEach((product) => {
			products.push(product);
		});
		makeProducts();
		console.log("products", products);
		}).catch((error) => {
		console.log('error', error);
	});
};


const makeProducts = () => {
	products.forEach((boom) =>{
		dom(boom);
	});
};

const initializer = () => {
	explosivesGetter();
};

// const getProducts = () => {
// 	return products;
// };

module.exports = {initializer, explosivesGetter};