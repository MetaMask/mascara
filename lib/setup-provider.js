const setupIframe = require('./setup-iframe.js')
const MetamaskInpageProvider = require('./inpage-provider.js')

module.exports = getProvider


function getProvider(opts){
  if (global.web3) {
    console.log('MetaMask ZeroClient - using environmental web3 provider')
    return global.web3.currentProvider
  }
  console.log('MetaMask ZeroClient - injecting zero-client iframe!')
  var iframeStream = setupIframe({
    zeroClientProvider: opts.mascaraUrl,
  })

  var inpageProvider = new MetamaskInpageProvider(iframeStream)
  return inpageProvider

}
