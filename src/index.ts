import Ajv, { JSONSchemaType } from "ajv";

type Data = { hoge: number | null };

const data: Data = {
  hoge: null,
};

// ERR!
const schema: JSONSchemaType<Data> = {
  type: "object",
  properties: {
    hoge: {
      type: ["number", "null"],
    },
  },
  required: ["hoge"],
};

const validator = new Ajv().compile(schema);
if (validator(data)) {
  console.log("<validator> OK");
} else {
  console.log("<validator> NG");
}

const schema2: JSONSchemaType<{ hoge: number | null }> = {
  type: "object",
  properties: {
    hoge: {
      type: "number",
      nullable: true,
    },
  },
  required: ["hoge"],
};

const validator2 = new Ajv().compile(schema2);
if (validator2(data)) {
  console.log("<validator2> OK");
} else {
  console.log("<validator2> NG");
}
