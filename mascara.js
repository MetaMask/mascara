const setupProvider = require('./lib/setup-provider.js')
const setupDappAutoReload = require('./lib/auto-reload.js')
const setupWidget = require('./lib/setup-widget.js')
const config = require('./config.json')

module.exports = {
  createDefaultProvider,
  // disabled for now
  // setupWidget,
}

function createDefaultProvider (opts = {}) {
  const host = opts.host || 'https://wallet.metamask.io'
  //
  // setup provider
  //

  const provider = setupProvider({
    mascaraUrl: host + '/proxy/',
  })
  instrumentForUserInteractionTriggers(provider)

  //
  // ui stuff
  //

  let shouldPop = false
  window.addEventListener('click', maybeTriggerPopup)

  return !window.web3 ? setupDappAutoReload(provider, provider.publicConfigStore) : provider


  //
  // util
  //

  function maybeTriggerPopup(event){
    if (!shouldPop) return
    shouldPop = false
    window.open(host, '', 'width=360 height=500')
  }

  function instrumentForUserInteractionTriggers(provider){
    if (window.web3) return provider
    const _super = provider.sendAsync.bind(provider)
    provider.sendAsync = function (payload, cb) {
      console.log(payload)
      if (config.ethereum['should-show-ui'].includes(payload.method)) {
        shouldPop = true
      }
      _super(payload, cb)
    }
  }

}

// function setupWidget (opts = {}) {

// }