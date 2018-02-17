module.exports = {
  // any 4 char strings
  forChar: /^.{4}$/,

  // +7 (xxx) xxx-xx-xx
  phoneNumber: /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/,

  // any 6+ alphanumaterics or _
  nickname: /\w{6}\w*/,

  // 25.05.1995
  date: /\d{2}.\d{2}\.\d{4}/
}
