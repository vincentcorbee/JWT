const JWT = require('..')
const secret = 'my secret'

const token = JWT.sign(
  { alg: 'HS256' },
  { name: 'john', exp: new Date(Date.now() + 900000).getTime() },
  secret
)

assert(JWT.verify(token, secret))
