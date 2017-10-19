# Developers Guide

MeataMascara is a library that allows you to have a safety net if a user does not
have a web3 enabled browser while also pulling out the provider and wrapping it in
the mascara api if they do.


## How to use:

To use as a CDN put this script tag in the `<head>` of your html file:

```html
<script src="https://zero.metamask.io/metamascara.js"></script>
```

Or bring your own:

`npm i --save metamascara`

```js
const metamask = require('metamascara')
const EthJs = require('ethjs')

// mascara will use the environmental provider if the user brings one
// in the form of metamask extension, mist or parity
// other wise it will make one for you :}

const ethereumProvider = metamask.createDefaultProvider()

const eth = new EthJs(ethereumProvider)

// do stuff...
```


# The difference between mascara and the extension
Mascara Is in alpha and some of it's behaviors are still undocumented.

