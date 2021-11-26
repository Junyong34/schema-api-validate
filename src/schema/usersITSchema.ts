export default
    {
  "type": "object",
  "properties": {
    "data": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number"
        },
        "email": {
          "type": "string"
        },
        "first_name": {
          "type": "string"
        },
        "last_name": {
          "type": "string"
        },
        "avatar": {
          "type": "string"
        }
      },
      "required": [
        "avatar",
        "email",
        "first_name",
        "id",
        "last_name"
      ]
    },
    "support": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string"
        },
        "text": {
          "type": "string"
        }
      },
      "required": [
        "text",
        "url"
      ]
    }
  },
  "required": [
    "data",
    "support"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
    