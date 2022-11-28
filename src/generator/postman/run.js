import postmanToOpenApi from 'postman-to-openapi'
// import postmanCollection from "./MDM.postman_collection.json"

const postmanCollection = './src/generator/postman/MDM.postman_collection.json'
const outputFile = './src/generator/postman/to/collection.json'

// Async/await
const call = async () => {
    try {
        const result = await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General', })
        // Without save the result in a file
        // const result2 = await postmanToOpenApi(postmanCollection, null, { defaultTag: 'General' })
        console.log(`OpenAPI specs: ${result}`)
    } catch (err) {
        console.log(err)
    }
}

call();

// Promise callback style
// postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'API' })
//     .then(result => {
//        console.log(`OpenAPI specs: ${result}`)
//     })
//     .catch(err => {
//        console.log(err)
//     })
