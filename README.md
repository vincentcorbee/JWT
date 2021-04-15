# JWT

JWT library for nodejs

Supports HS256 and RS256

## Usage

install with npm

```bash
npm install i @digitalbranch/jwt
```

Creating and verifying a HS256 token

```javascript
const secret = 'my secret'

const token = JWT.sign(
  { alg: 'HS256' },
  { name: 'john', exp: new Date(Date.now() + 900000).getTime() },
  secret
)

assert(JWT.verify(token, secret))
```

Creating and verifying a RS256 token

```javascript
JWT.createKeys().then(({ privateKey }) => {
  const token = JWT.sign(
    { alg: 'RS256' },
    { name: 'john', exp: new Date(Date.now() + 900000).getTime() },
    privateKey
  )

  assert(JWT.verify(token, privateKey))
})
```
