const Iframe = require('iframe')

module.exports = function setupWidget (opts = {}) {
  window.addEventListener('load', () => {
    if (window.web3) return
    const frame = Iframe({
      src: `${opts.host}/proxy/widget.html` || 'https://zero.metamask.io/proxy/widget.html',
      container: opts.container || document.body,
      sandboxAttributes: opts.sandboxAttributes || ['allow-scripts', 'allow-popups', 'allow-same-origin', 'allow-top-navigation'],
    })
    const iframe = frame.iframe
    iframe.style = `
    border: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 10vh;
    width: 189px;
    `
  })
}
