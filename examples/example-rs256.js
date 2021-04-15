const JWT = require('..')

JWT.createKeys().then(({ privateKey }) => {
  const token = JWT.sign(
    { alg: 'RS256' },
    { name: 'john', exp: new Date(Date.now() + 900000).getTime() },
    privateKey
  )

  assert(JWT.verify(token, privateKey))
})
