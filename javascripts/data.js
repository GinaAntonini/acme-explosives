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
	categoriesJSON().then((results) => {
		results.forEach((boom) => {
			categories.push(boom);
		});
		return typesJSON();
	}).then((results2) => {
		results2.forEach((boom) => {
			types.push(boom);
		});
		return productsJSON();
	}).then((results3) => {
		results3.forEach((boom) => {
			products.push(boom);
		});
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

module.exports = {initializer: initializer, explosivesGetter: explosivesGetter};