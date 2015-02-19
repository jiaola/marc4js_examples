'use strict';

// require should
// npm install should -g

// run this in the marc4js directory
// node samples/parse_pipe.js

// This example reads a marcxml file and convert it to mrk format and write to the terminal, using pipes. 

var marc4js = require('marc4js');
var fs = require('fs');
var should = require('should');

var marcxmlParser = marc4js.parse({fromFormat: 'xml'});
var mrkTransformer = marc4js.transform({toFormat: 'mrk'});
fs.createReadStream('data/collection.xml').pipe(marcxmlParser).pipe(mrkTransformer).pipe(process.stdout);
