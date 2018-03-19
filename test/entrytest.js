'use strict';

var db = require('../models');
var Entry = db.Entry;

var expect = require('chai').expect;

describe('Entry', function () {
  it('should load', function (done) {
    Entry.create({
      entry: "JSON",
      userid: "23",
      context: "This is JSON.",
      contextLink: "URL"
    });
    done();
  });
});