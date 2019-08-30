const STRING = "String"
const ARRAY = "Array"
const OBJECT = "Object"

var stringConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = {}.constructor;

let Bufferr = require('buffer/').Buffer

let encode = function (content) {
    if (type(content) === ARRAY || type(content) === OBJECT || (type(content) === STRING && isJsonString(content))) {
        content = JSON.stringify(content);
    }
    let encodedContent = Bufferr.from("" + content).toString("base64");
    return encodedContent;
}

let decode = function (content) {
    let decodedContent = Bufferr.from(content, 'base64').toString("ascii");
    if (isJsonString(decodedContent)) {
        decodedContent = JSON.parse(decodedContent);
    }
    return decodedContent;
}

let type = (object) => {
    if (object === null || object === undefined) {
        return null
    }
    else if (object.constructor === stringConstructor) {
        return STRING;
    }
    else if (object.constructor === arrayConstructor) {
        return ARRAY;
    }
    else if (object.constructor === objectConstructor) {
        return OBJECT;
    }
}


let isJsonString = function (text) {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true
    } else {
        return false
    }
}

module.exports.encode = encode;
module.exports.decode = decode;
