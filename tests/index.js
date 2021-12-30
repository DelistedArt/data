const fs = require('fs');
const glob = require("glob");
const assert = require('assert');
const Ajv = require("ajv");

describe('Valid data file', function() {
  describe('filenames', function() {
    assert.equal(true, true);
  });

  describe('file contents structure', function() {
    const ajv = new Ajv();

    const schema = JSON.parse(fs.readFileSync('./tests/schema.json'));

    glob("./src/*.json", function (er, files) {
      files.forEach((file) => {
        let data = JSON.parse(fs.readFileSync(file));
          let validate = ajv.compile(schema)
          let valid = validate(data)
          assert.equal(true, valid);
      });
    });
  })
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});