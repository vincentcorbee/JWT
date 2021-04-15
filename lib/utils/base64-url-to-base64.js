const base64UrlToBase64 = base64Url => {
  const base = base64Url.replace(/\-|_/g, m => (m === '-' ? '+' : '/'))
  const length = base.length

  switch (length % 4) {
    case 0:
      return base
    case 2:
      return `${base}==`
    case 3:
      return `${base}=`
    default:
      throw new Error(`Illegal base64url string: ${base64Url}`)
  }
}

module.exports = base64UrlToBase64
