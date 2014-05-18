# ssh-url [![NPM version](https://badge.fury.io/js/ssh-url.svg)](http://badge.fury.io/js/ssh-url) [![Build Status](https://travis-ci.org/kaelzhang/node-ssh-url.svg?branch=master)](https://travis-ci.org/kaelzhang/node-ssh-url) [![Dependency Status](https://gemnasium.com/kaelzhang/node-ssh-url.svg)](https://gemnasium.com/kaelzhang/node-ssh-url)

Utilities to resolute and parse ssh url including scp-like syntax SSH protocol.

## Installation

```bash
$ npm install ssh-url --save
```

## Usage

```js
var url = require('ssh-url');

var parsed = url.parse('git@github.com:kaelzhang/node-ssh-url.git');
// -> {
//   protocol: null,
//   user: 'git',
//   hostname: 'github.com',
//   pathname: '/kaelzhang/node-ssh-url.git'
// }

url.format(parsed);
// -> git@github.com:kaelzhang/node-ssh-url.git
```

### url.parse(urlStr)

Takes a SSH URL string, and returns an object.

#### urlObj

For now, `urlObj` only contains four properties.

- protocol `null|String` if null, indicates that `urlStr` uses scp-like syntax.
- user `String`
- hostname `String` for now, there's no port.
- pathname `String` starts with `'/'`

### url.format(urlObj)

Takes a parsed SSH URL object, and returns a formatted URL string.