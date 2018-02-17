module.exports = {
  // match anything but numbers
  human: /^\D*$/,
  
  // stop to *, expect for stop to code & stop to live
  habit: /stop to (?!code|live)/
}
