const fs = require('fs');
var path = require('path');
const glob = require("glob");
const assert = require('assert');
const Ajv = require("ajv");

describe('Valid data file', function() {
  it('should have the correct filename format', function() {
    glob("./src/*", function (er, files) {
      files.forEach((file) => {
        let filename = path.basename(file);
        const testFilename = new RegExp('^0x[a-fA-F0-9]{40}\.json$')
        assert.equal(true, testFilename.test(filename));
      })
    });
  });

  it('should have the correct data structure', function() {
    const ajv = new Ajv();
    const schema = JSON.parse(fs.readFileSync('./tests/schema.json'));
    glob("./src/*.json", function (er, files) {
      files.forEach((file) => {
        let filename = path.basename(file);
        let data = JSON.parse(fs.readFileSync(file));
        let validate = ajv.compile(schema);
        let valid = validate(data);
        assert.equal(true, valid, `Invalid Schema for ${filename}`);
      });
    });
  })
});