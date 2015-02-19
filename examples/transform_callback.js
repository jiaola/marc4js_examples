'use strict';

// run this in the marc4js directory
// node samples/stringify_callback.js

// This examples shows how to use transfrom callback API to write objects to different formats

var marc4js = require('marc4js');

// build a record from scratch
var record = new marc4js.marc.Record();
record.leader = new marc4js.marc.Leader('00307nam a2200085Ia 45e0');
record.addVariableField(new marc4js.marc.ControlField("008", "080906s9999    xx            000 0 und d"));
record.addVariableField(new marc4js.marc.DataField("100", '1', ' ', [["a", "Biggers, Earl Derr."]]));
record.addVariableField(new marc4js.marc.DataField("245", '1', '0', [["a", "Charlie Chan Carries On"], ["h", "[electronic resource]"]]));
record.addVariableField(new marc4js.marc.DataField("500", ' ', ' ', [["a", "An ebook provided by Project Gutenberg Australia"]]));
record.addVariableField(new marc4js.marc.DataField("856", '4', '0', [["u", "http://gutenberg.net.au/ebooks07/0700761h.html "]]));

var records = [];
records.push(record);

var record2 = new marc4js.marc.Record();
record2.leader = new marc4js.marc.Leader('00287nam a2200085Ia 45e0');
record2.addVariableField(new marc4js.marc.ControlField("008", "080906s9999    xx            000 0 und d"));
record2.addVariableField(new marc4js.marc.DataField("100", '1', ' ', [["a", "Wallace, Edgar."]]));
record2.addVariableField(new marc4js.marc.DataField("245", '1', '0', [["a", "Sanders"], ["h", "[electronic resource]"]]));
record2.addVariableField(new marc4js.marc.DataField("500", ' ', ' ', [["a", "An ebook provided by Project Gutenberg Australia"]]));
record2.addVariableField(new marc4js.marc.DataField("856", '4', '0', [["u", "http://gutenberg.net.au/ebooks07/0700771h.html "]]));
records.push(record2);

// converts a single record
marc4js.transform(record, {}, function(err, data) {
    console.log(data);
    example1();
});

function example1() {
    // converts an array of records to iso2709
    marc4js.transform(records, {}, function(err, data) {
        console.log(data);
        example2();
    });
}

function example2() {
    // converts an array of records to marcxml
    marc4js.transform(records, {toFormat: 'xml'}, function(err, data) {
        console.log(data);
        example3();
    });
}

// converts an array of records to text (MarcEdit mrk file format)
function example3() {
    marc4js.transform(records, {toFormat: 'text'}, function(err, data) {
        console.log(data);
    });
}
