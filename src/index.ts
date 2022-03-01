import { JSONSchemaType } from "ajv";

// ERR!
const schema: JSONSchemaType<{ hoge: number | null }> = {
  type: "object",
  properties: {
    hoge: {
      type: ["number", "null"],
    },
  },
  required: ["hoge"],
};
