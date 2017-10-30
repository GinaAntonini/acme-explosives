"use strict";

const dom = require('./dom');

$('#friendly').click((e) => {
	dom.domString(e);
});

$('#not-so-friendly').click((e) => {
	dom.domString(e);
});

module.exports = {};