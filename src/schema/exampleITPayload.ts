
    export default
    {
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number"
    },
    "sex": {
      "type": "number"
    },
    "friend": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "class": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
    