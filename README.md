# [DO NOT USE YET THIS IS A WIP]
# MetaMascara

MetaMascara(mascara) brings metamask when metamask is not installed.

## Disclaimer:

MetaMascar is in alpha expect breaking changes

## How does it work and how to use it:

Mascara is an iframe that acts as a proxy between your dapp and metamask core.
The metamask core is the global context housed in a service worker, it does the
key management for every dapp the user visits.

![nomnom](http://www.nomnoml.com/#view/%5B%3Cactor%3E%20user%5D%20%3C---%3E%20%5B%3Cui%3E%20UI%20%2F%20%0Ametamask%20pop%20up%5D%0A%5B%3Cactor%3E%20user%5D%20--%3E%20%5B%3Cblah%3E%20Dapp%5D%0A%5B%3Cui%3E%20UI%20%2F%20%0Ametamask%20pop%20up%5D%20%3C-%3E%20%5B%3Csvw%3EService%20Worker%5D%0A%5B%3Cblah%3E%20Dapp%5D%20%20%3C-%3E%20%5B%3Csvw%3EService%20Worker%5D%0A%0A%5B%3Cactor%3E%20user%5D%0A%0A%5B%3C%3E%20Service%20Worker%7C%0A%20%5B%3Csvw%3EMetaMask%20core%5D%0A%5D%0A%5B%3Cblah%3E%20Dapp%7C%0A%20%20%5B%3Creference%3Emetamask%20iframe%5D%20%0A%5D%0A%5B%3Cui%3E%20UI%20%2F%0Ametamask%20pop%20up%5D%0A%23.svw%3A%20fill%3D%238f8%20%0A%0A%23.red%3A%20fill%3D%23fff%0A)

to use as a CDN put this script tag in the `<head>` of your html file:

```html
<script src="https://zero.metamask.io/metamascara.js"></script>
```

or bring your own:

```js
const metamask = require('mascara')
const EthJs = require('ethjs')

let ethereumProvider
if (window.web3) {
  ethereumProvider = web3.currentProvider
} else {
  // use metamask's mascara as the fall back ethereum provider if the user
  // doesn't bring their own
  ethereumProvider = metamask.createDefaultProvider()
}

const eth = new EthJs(ethereumProvider)

// do stuff...
```