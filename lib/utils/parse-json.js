const base64UrlToBase64 = require('./base64-url-to-base64')

const parseJSON = data => {
  try {
    return JSON.parse(Buffer.from(base64UrlToBase64(data), 'base64'))
  } catch (err) {
    return false
  }
}

module.exports = parseJSON
