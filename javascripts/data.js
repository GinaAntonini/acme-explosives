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
	return categoriesJSON().then((catResults) => {
		catResults.forEach((category) => {
			categories.push(category);
		});
		console.log("categories", categories);
		return typesJSON();
	}).then((typeResults) => {
		typeResults.forEach((type) => {
			categories.forEach((category) => {
					if (type.category === category.id){
						type.categoryId = category.id;
						type.categoryName = category.name;
					}
				});
			types.push(type);
		});
		console.log("types", types);
		return productsJSON();
	}).then((productResults) => {
		productResults.forEach((product) => {
			let key = Object.keys(product)[0];
			product = product[key];
			types.forEach((type) => {
					if (product.type === type.id){
						product.typeName = type.name;
						product.categoryId = type.categoryId;
						product.categoryName = type.categoryName;
					}
				});
			products.push(product);
		});
		makeProducts();
		console.log("products", products);
		}).catch((error) => {
		console.log('error', error);
	});
};

			
// $('#friendly').click((event) => {
// 	dom.domString(event);
// });

// $('#not-so-friendly').click((event) => {
// 	dom.domString(event);
// });




const makeProducts = () => {
	products.forEach((product) =>{
		dom.domString(product);
	});
};


const initializer = () => {
	explosivesGetter();
};


module.exports = {initializer, explosivesGetter};