const limitText = function (text, count) {
  return text.slice(0, count) + (text.length > count ? '...' : '')
}

export { limitText }
