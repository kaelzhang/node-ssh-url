'use strict';

var surl = exports;
var url = require('url');


var REGEX_START_SSH = /^ssh:\/\//;
surl.parse = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Parameter \'url\' must be a string');
  }

  return REGEX_START_SSH.test(str)
    ? parseSsh(str)
    : parseScpSsh(str);
};

surl.format = function (obj) {
  return obj.protocol
    ? formatSsh(obj)
    : formatScpSsh(obj);
};

function parseSsh (str) {
  var parsed = url.parse(str);
  return {
    protocol: parsed.protocol,
    user: parsed.auth,
    hostname: parsed.hostname,
    pathname: parsed.pathname
  }
}

function parseScpSsh(str) {
  var parsed = url.parse('ssh://' + str);
  return {
    protocol: null,
    user: parsed.auth,
    hostname: parsed.hostname,
    pathname: (parsed.pathname || '').replace(/^\/:/, '/')
  };
};

function formatSsh (obj) {
  return obj.protocol + '//' + obj.user + '@' + obj.hostname + obj.pathname;
}

function formatScpSsh (obj) {
  return obj.user + '@' + obj.hostname + ':' + (obj.pathname || '').replace(/^\//, '');
}
