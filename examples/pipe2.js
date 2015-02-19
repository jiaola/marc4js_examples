'use strict';

// require should
// npm install should -g

// run this in the marc4js directory
// node samples/parse_pipe.js

// This example reads a mrk file and convert it to iso2709 format and write to the terminal, using pipes.

var marc4js = require('marc4js');
var fs = require('fs');
var should = require('should');

var mrkParser = marc4js.parse({fromFormat: 'mrk'});
var marcTransformer = marc4js.transform();
fs.createReadStream('data/collection.mrk').pipe(mrkParser).pipe(marcTransformer).pipe(process.stdout);
