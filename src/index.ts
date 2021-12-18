const stringConstructor = "test".constructor;
const arrayConstructor = [].constructor;
const objectConstructor = {}.constructor;

let localBuffer = global.Buffer || require("buffer").Buffer;

let encode = (content: string | Array<any> | object): string | undefined => {
  if (!content) {
    return content;
  } else if (
    type(content) === Type.ARRAY ||
    type(content) === Type.OBJECT ||
    (type(content) === Type.STRING && isJsonString(content as string))
  ) {
    content = JSON.stringify(content);
  }

  return localBuffer.from("" + content).toString("base64");
};

let decode = (content: string): string => {
  if (!content) {
    return content;
  }

  let decodedContent = localBuffer.from(content, "base64").toString("ascii");

  if (isJsonString(decodedContent)) {
    decodedContent = JSON.parse(decodedContent);
  }

  return decodedContent;
};

let type = (object: any): Type | undefined => {
  if (object === null || object === undefined) {
    return;
  } else if (object.constructor === stringConstructor) {
    return Type.STRING;
  } else if (object.constructor === arrayConstructor) {
    return Type.ARRAY;
  } else if (object.constructor === objectConstructor) {
    return Type.OBJECT;
  }
};

let isJsonString = (text: string): boolean => {
  return /^[\],:{}\s]*$/.test(
    text
      .replace(/\\["\\\/bfnrtu]/g, "@")
      .replace(
        /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        "]"
      )
      .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
  );
};

enum Type {
  STRING = "string",
  ARRAY = "array",
  OBJECT = "object",
}

export default { encode, decode };
