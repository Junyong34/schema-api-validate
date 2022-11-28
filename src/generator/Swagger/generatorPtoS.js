import p2s  from 'postman-to-swagger'
import yaml  from 'js-yaml'
import fs  from 'fs'
import postmanJson  from '../postman/MDM.postman_collection.json'
const swaggerJson = p2s(postmanJson, {
    target_spec: "swagger2.0",
    info: {
        version: 'v1'
    }
})

let output = JSON.stringify(swaggerJson, null, 2)
// let output = yaml.safeDump(swaggerJson)

// Save to file
fs.writeFileSync(
    'collection.json',
    output,
    'utf8'
)
