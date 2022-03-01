"use strict";
exports.__esModule = true;
var ajv_1 = require("ajv");
var data = {
    hoge: null
};
// ERR!
var schema = {
    type: "object",
    properties: {
        hoge: {
            type: ["number", "null"]
        }
    },
    required: ["hoge"]
};
var validator = new ajv_1["default"]().compile(schema);
if (validator(data)) {
    console.log("<validator> OK");
}
else {
    console.log("<validator> NG");
}
var schema2 = {
    type: "object",
    properties: {
        hoge: {
            type: "number"
        }
    },
    required: ["hoge"]
};
var validator2 = new ajv_1["default"]().compile(schema2);
if (validator2(data)) {
    console.log("<validator2> OK");
}
else {
    console.log("<validator2> NG");
}
