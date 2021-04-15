const { getAlg, base64ToBase64Url, getSignature } = require('./utils')

const sign = (header = {}, payload, secret) => {
  header = { typ: 'JWT', alg: 'HS256', ...header }

  const encodedPayload = base64ToBase64Url(
    Buffer.from(JSON.stringify(payload)).toString('base64')
  )

  const encodedHeader = base64ToBase64Url(
    Buffer.from(JSON.stringify(header)).toString('base64')
  )

  const signature = getSignature(
    getAlg(header.alg),
    encodedHeader,
    encodedPayload,
    secret
  )

  return `${encodedHeader}.${encodedPayload}.${signature}`
}

module.exports = sign
