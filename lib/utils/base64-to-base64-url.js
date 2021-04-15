const base64ToBase64Url = base64 =>
  base64.split('=')[0].replace(/\+|\//g, m => (m === '+' ? '-' : '_'))

module.exports = base64ToBase64Url
