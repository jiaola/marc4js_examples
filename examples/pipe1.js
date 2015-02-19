'use strict';

// require should
// npm install should -g

// run this in the marc4js directory
// node samples/parse_pipe.js

// This example reads a marc file and convert it to marcxml format and write to the terminal, using pipes.

var marc4js = require('marc4js');
var fs = require('fs');
var should = require('should');

var marcParser = marc4js.parse();
var marcxmlTransformer = marc4js.transform({toFormat: 'marcxml'});
fs.createReadStream('data/collection.mrc').pipe(marcParser).pipe(marcxmlTransformer).pipe(process.stdout);
