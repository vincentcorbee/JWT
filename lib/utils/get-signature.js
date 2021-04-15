const base64ToBase64Url = require('./base64-to-base64-url')
const crypto = require('crypto')
const { SIG_MAC } = require('../constants')

const getSignature = (alg, encodedHeader, encodedPayload, secret) => {
  const data = `${encodedHeader}.${encodedPayload}`

  switch (alg) {
    case SIG_MAC.SHA256:
      return base64ToBase64Url(
        crypto.createHmac(SIG_MAC.SHA256, secret).update(data).digest('base64')
      )

    case SIG_MAC.RSASHA256:
      return base64ToBase64Url(
        crypto.createSign(SIG_MAC.SHA256).update(data).sign(secret, 'base64')
      )
  }
}

module.exports = getSignature
