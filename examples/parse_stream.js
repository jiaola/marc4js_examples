'use strict';

// require should
// npm install should -g

// run this in the marc4js directory
// node samples/parse_stream.js

// This examples shows how to use the strema API to parse iso2709 format.

var marc4js = require('marc4js');
var fs = require('fs');
var should = require('should');

var parser = marc4js.parse({fromFormat: 'iso2709'});
var records = [];
fs.readFile('data/PGA-other-2.mrc', function(err, data) {
    parser.on('data', function (record) {
        records.push(record);
    });

    parser.on('error', function (error) {
        console.log("error: ", error);
    });

    parser.on('end', function () {
        records.length.should.eql(159);
    });

    parser.write(data.toString());
    parser.end();
});
