# Developers Guide

MeataMascara is a library that allows you to have a safety net if a user does not
have a web3 enabled browser while also pulling out the provider and wrapping it in
the mascara api if they do.

## Caveats of the browser:

The MetaMask pop-up can only open on a user action (click). So in order to get the user to approve
a transaction you will need to have the user click a html element to get the pop up.

## How to use:

To use as a CDN put this script tag in the `<head>` of your html file:

```html
<script src="https://wallet.metamask.io/metamascara.js"></script>
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

## The Provider API

.. describe the provider, what it is, how to use it.

`provider.sendAsync(options, callback)`

Easiest used with an abstraction library like EthJS or Web3.js.

# The difference between mascara and the extension
Mascara Is in alpha and some of it's behaviors are still undocumented.

## Managing Accounts

Since the user may not have an extension, you may need to detect MetaMascara and provide a link for the user to manage their accounts, as seen in this example:
https://www.webpackbin.com/bins/-KwNii7hllCRoZysRVhK

# Additional Security Concerns

Always make sure to tell your users to bookmark your site, and to only access it via this bookmark, to reduce the probability of phishing.
