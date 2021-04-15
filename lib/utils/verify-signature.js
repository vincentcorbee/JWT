const crypto = require('crypto')
const getAlg = require('./get-alg')

const verifySignature = (alg, signature, data, secret) => {
  switch (alg) {
    case 'RS256':
      return crypto
        .createVerify(getAlg(alg))
        .update(data)
        .verify(crypto.createPublicKey(secret), signature, 'base64')
    default:
      return true
  }
}

module.exports = verifySignature
