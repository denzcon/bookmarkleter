'use strict';

var bookmarkleter = require('../bookmarkleter');

exports.simple = function (test) {

  var data = [
    ['test', 'javascript:test;'],
    ['var test', 'javascript:var%20test;'],
    ['var test = function(){var foo};', 'javascript:var%20test=function(){};'],
    ['var test = function(foo){foo++};', 'javascript:var%20test=function(foo){foo++};'],
    ['document.write("bookmarklet");', 'javascript:document.write(%22bookmarklet%22);'],
    ['window.open("http://www.google.com");', 'javascript:window.open(%22http://www.google.com%22);']
  ];

  data.forEach(function (datum) {
    test.equal(bookmarkleter(datum[0]), datum[1]);
  });

  test.done();

};
