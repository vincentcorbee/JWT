const { base64UrlToBase64, parseJSON, verifySignature } = require('./utils')
const sign = require('./sign')

const verify = (token, secret) => {
  const parts = token.split('.')

  if (parts.length !== 3) {
    return false
  }

  let [header, payload, signature] = parts.map((part, i) => {
    if (i !== 2) return parseJSON(part)
    else return base64UrlToBase64(part)
  })

  if (!header | !payload | !signature) return false

  const alg = header.alg

  if (!verifySignature(alg, signature, `${parts[0]}.${parts[1]}`, secret)) return false

  if (token.exp && token.exp < new Date().getTime()) return false

  if (sign(header, payload, secret) === token) return true
  else return false
}

module.exports = verify
