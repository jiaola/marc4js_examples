'use strict';

// require should
// npm install should -g

// run this in the marc4js directory
// node samples/parse_callback.js

// This exmaple shows how to use callback API to read different formats

var marc4js = require('marc4js');
var fs = require('fs');
var should = require('should');

fs.readFile('data/PGA-other-2.mrc', function(err, data) {
    marc4js.parse(data, {}, function(err, records) {
        records.length.should.eql(159);
    });
});

fs.readFile('data/collection.xml', function(err, data) {
    marc4js.parse(data, {fromFormat: 'marcxml'}, function(err, records) {
        records.length.should.eql(2);
    });
});

// read MRK format
fs.readFile('data/PGA_2records.mrk', function(err, data) {
    marc4js.parse(data, {fromFormat: 'mrk'}, function(err, records) {
        records.length.should.eql(2);
    });
});

// read MARC-in-JSON format
fs.readFile('data/collection.json', function(err, data) {
    marc4js.parse(data, {fromFormat: 'json'}, function(err, records) {
        records.length.should.eql(2);
    });
});
