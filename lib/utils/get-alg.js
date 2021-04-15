const { ALG_PARAM_VALUES, SIG_MAC } = require('../constants')

// Supported algorithms for header parameter alg: https://tools.ietf.org/html/rfc7518#section-3.1
const getAlg = alg => {
  switch (alg) {
    case ALG_PARAM_VALUES.HS256:
      return SIG_MAC.SHA256
    case ALG_PARAM_VALUES.RS256:
      return SIG_MAC.RSASHA256
  }

  throw new Error(`${alg} not supported`)
}

module.exports = getAlg
