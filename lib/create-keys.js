const path = require('path')
const { promisify } = require('util')
const fs = require('fs')
const crypto = require('crypto')

const createKeys = async dir => {
  const { privateKey, publicKey } = await promisify(crypto.generateKeyPair)('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  })

  if (dir) {
    await promisify(fs.writeFile)(path.join(process.cwd(), dir, 'key_rsa.pub'), publicKey)

    await promisify(fs.writeFile)(path.join(process.cwd(), dir, 'key_rsa'), privateKey)
  }

  return {
    privateKey,
    publicKey,
  }
}

module.exports = createKeys
