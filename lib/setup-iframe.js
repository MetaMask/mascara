const Iframe = require('iframe')
const createIframeStream = require('iframe-stream').IframeStream

function setupIframe(opts) {
  opts = opts || {}
  let frame = Iframe({
    src: opts.zeroClientProvider || 'https://wallet.metamask.io/',
    container: opts.container || document.head,
    sandboxAttributes: opts.sandboxAttributes || ['allow-scripts', 'allow-popups', 'allow-same-origin'],
  })
  let iframe = frame.iframe
  iframe.style.setProperty('display', 'none')

  return createIframeStream(iframe)
}

module.exports = setupIframe

