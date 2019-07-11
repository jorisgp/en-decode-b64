# en-decode-b64

You can use en-decode-b64 to easily encode and decode your string, json object or json array base64. This module automically detects if you are providing a json object, array or string. The decode function will return the original value and the original type of object (String, Array, JSON).

## Install

```shell
npm install --save en-decode-b64
```

## Usage

Here is an basic example of en-decode-b64 encoding a String.

```js

import edb64 from "en-decode-b64";

const string = "abc"
   
const encodedString = edb64.encode(string)

console.log(encodedString) // YWJj

const decodedString = edb64.decode(encodedString)

console.log(decodedString) // abc

```

Here is an basic example of en-decode-b64 encoding a JSON Object.

```js

import edb64 from "en-decode-b64";

const jsonObject = { name: "Joris", city: "Amsterdam" }

const encodedJsonObect = edb64.encode(jsonObject)

console.log(encodedJsonObect) // eyJuYW1lIjoiam9yaXMiLCJjaXR5IjoiQW1zdGVyZGFtIn0=

const decodedJsonObect = edb64.decode(encodedJsonObect)

console.log(decodedJsonObect) // { name: "Joris", city: "Amsterdam" }

```

Here is an basic example of en-decode-b64 encoding a JSON Array.
```js

import edb64 from "en-decode-b64";

const jsonArray = [{"name":"Joris","city":"Amsterdam"},{"name":"Freek","city":"Assendelft"}]

const encodedJsonArray = edb64.encode(jsonArray)

console.log(encodedJsonArray) // W3sibmFtZSI6ImpvcmlzIiwiY2l0eSI6IkFtc3RlcmRhbSJ9LHsibmFtZSI6IkZyZWVrIiwiY2l0eSI6IkFzc2VuZGVsZnQifV0=

const decodedJsonArray = edb64.decode(encodedJsonArray)

console.log(decodedJsonArray) // [{"name":"Joris","city":"Amsterdam"},{"name":"Freek","city":"Assendelft"}]

```

## License

[MIT](https://en-decode-b64.mit-license.org/)

[npm-image]: https://img.shields.io/npm/v/en-decode-b64.svg
[npm-url]: https://npmjs.org/package/en-decode-b64
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://coveralls.io/repos/github/jgpieters/en-decode-b64/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/jgpieters/en-decode-b64?branch=master