let assembleFile = require('../../assemble-file-template');
let html = require('./student-opportunities');
let data = require('../../data/student-opportunities-data');

var app = assembleFile(html, data, '../../public/student-opportunities'); 

module.exports = app;	