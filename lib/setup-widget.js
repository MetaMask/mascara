const Iframe = require('iframe')

module.exports = function setupWidget (opts = {}) {
  let iframe
  let style = `
    border: 0px;
    position: absolute;
    right: 0;
    top: 0;
    height: 7rem;`
  let resizeTimeout

  const changeStyle = () => {
    iframe.style = style + (window.outerWidth > 575 ? 'width: 19rem;' : 'width: 7rem;')
  }

  const resizeThrottler = () => {
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        changeStyle();
        // 15fps
      }, 66);
    }
  }

  window.addEventListener('load', () => {
    if (window.web3) return

    const frame = Iframe({
      src: `${opts.host}/proxy/widget.html` || 'https://wallet.metamask.io/proxy/widget.html',
      container: opts.container || document.body,
      sandboxAttributes: opts.sandboxAttributes ||
        ['allow-scripts', 'allow-popups', 'allow-same-origin', 'allow-top-navigation'],
      scrollingDisabled: true,
    })

    iframe = frame.iframe
    changeStyle()
  })

  window.addEventListener('resize', resizeThrottler, false);
}
