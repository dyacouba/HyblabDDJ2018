// Use strict mode
'use strict';

// Load usefull expressjs and nodejs objects / modules
var express = require('express');
var path = require('path');
var xlsx = require('xlsx');

var app = express();

// Minimum routing: serve static content from the html directory
app.use('/',express.static(path.join(__dirname, 'public')));

app.post('/actifs', function(req, res) {
	var workbook = xlsx.readFile('./nantes-st-nazaire-dev/actifs.xlsx');
	var sheet_name_list = workbook.SheetNames;
        var actifs_json = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        var actifs = xlsx.utils.sheet_to_html(workbook.Sheets[sheet_name_list[0]]);
        res.json(actifs_json);
});

app.post('/rangs', function(req, res) {
	var workbook = xlsx.readFile('./nantes-st-nazaire-dev/rangs-finaux.xlsx');
	var sheet_name_list = workbook.SheetNames;
    var rangs_json = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    res.json(rangs_json);
});

app.get('/actifs', function(req, res) {
	var workbook = xlsx.readFile('./nantes-st-nazaire-dev/actifs.xlsx');
	var sheet_name_list = workbook.SheetNames;
        var actifs_json = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        var actifs = xlsx.utils.sheet_to_html(workbook.Sheets[sheet_name_list[0]]);
        res.send(actifs_json);
        res.end();
});

app.get('/rangs', function(req, res) {
	var workbook = xlsx.readFile('./nantes-st-nazaire-dev/rangs-finaux.xlsx');
	var sheet_name_list = workbook.SheetNames;
    var rangs_json = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    res.send(rangs_json);
    res.end();
});


module.exports = app;
