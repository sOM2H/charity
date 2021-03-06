### Charity

Charity is an example application that demonstrates two different approaches to work with the Ethereum blockchain. One is by using [web3.js](https://github.com/ethereum/web3.js/) and [MetaMask](https://metamask.io/) browser plugin and another one by using [ethereum.rb](https://github.com/EthWorks/ethereum.rb) gem and Ruby on Rails as an API.

Description in English: [https://medium.com/@rubyruby.ru/dive-into-ethereum-development-part-3-user-application-107f0a6e5190](https://medium.com/@rubyruby.ru/dive-into-ethereum-development-part-3-user-application-107f0a6e5190)

Description in Russian: [https://habrahabr.ru/post/339080/](https://habrahabr.ru/post/339080/)

### Local Dev Setup

Install [yarn](https://yarnpkg.com/lang/en/docs/install/) in order to install the project dependencies.

Install dependencies:

```
yarn
```

Start dev server:

```
yarn run dev
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.

**For Rails API version:** change config/default.js to specify Charity Rails API endpoint.

**Important:** Mint feature will not work in a development environment.
