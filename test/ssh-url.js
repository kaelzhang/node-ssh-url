'use strict';

var expect = require('chai').expect;
var url = require('../');

var cases = [
{
  d: 'scp-like syntax',
  u: 'git@github.com:kaelzhang/node-ssh-url.git',
  e: {
    protocol: null,
    user: 'git',
    hostname: 'github.com',
    pathname: '/kaelzhang/node-ssh-url.git'
  }
},
{
  d: 'ssh protocol',
  u: 'ssh://git@github.com/kaelzhang/node-ssh-url.git',
  e: {
    protocol: 'ssh:',
    user: 'git',
    hostname: 'github.com',
    pathname: '/kaelzhang/node-ssh-url.git'
  }
}
];


describe("url.parse(str), url.format(obj)", function(){
  cases.forEach(function (c) {
    it(c.d, function(){
      var parsed = url.parse(c.u);
      expect(parsed).to.deep.equal(c.e);
      var formated = url.format(parsed);
      expect(formated).to.equal(c.u);
    });
  });
});
