const CloudmersiveImageApiClient = require('cloudmersive-image-api-client')
const fs = require('fs')

const defaultClient = CloudmersiveImageApiClient.ApiClient.instance

// Configure API key authorization: Apikey
const { Apikey } = defaultClient.authentications
Apikey.apiKey = '8c8ad416-6397-404b-95a5-a9c60d0b9046';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// Apikey.apiKeyPrefix = 'Token';

const apiInstance = new CloudmersiveImageApiClient.RecognizeApi()

// const imageFile = '/path/to/file.txt' // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.

module.exports = async imageFileName => {
  const imageFile = fs.readFileSync(imageFileName)

  return new Promise((resolve, reject) => {
    apiInstance.recognizeDescribe(imageFile, (error, data, response) => {
      if (error) return reject(error)

      resolve(data)
    })
  })
}


