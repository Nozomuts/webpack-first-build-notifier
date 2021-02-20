# webpack-first-build-notifier [![Build Status](https://travis-ci.org/NozomuTsuruta/webpack-first-build-notifier.svg?branch=master)](https://travis-ci.org/NozomuTsuruta/webpack-first-build-notifier)[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
This is a [webpack](http://webpack.github.io/) plugin that uses the [node-notifier](https://github.com/mikaelbr/node-notifier#readme) package to display notifications for webpack first build events.




To use, install the webpack-first-build-notifier package `npm install webpack-first-build-notifier --save-dev` and add the plugin to your Webpack configuration file

```js
// webpack.config.js
const WebpackFirstBuildNotifierPlugin = require('webpack-first-build-notifier');

module.exports = {
  // ...
  plugins: [
    new WebpackFirstBuildNotifierPlugin({
      title: "Webpack",
      message: "The build is complete!";
      sound: "Ping";
    })
  ],
  // ...
}
```

## Config Options

#### title
type: string | undefined
- The notification title. Defaults to "webpack-first-build-plugin".

#### message 
type: string | undefined
- The notification message. Defaults to "The build is complete!".

#### sound
type: "Boop" | "Breeze" | "Bubble" | "Crystal" | "Funky" | "Heroine" | "Jump" | "Mezzo"
 | "Pebble" | "Pluck" | "Ping" | "Sonar" | "Sonumi" | "Submerge" | undefined
- The notification sound. Defaults to "Ping".

## TypeScript

```ts
// webpack.config.ts
import webpack from 'webpack'
import WebpackFirstBuildNotifierPlugin from 'webpack-first-build-notifier';

const config: webpack.Configuration = {
  // ... snip ...
  plugins: [
    new WebpackFirstBuildNotifierPlugin({
      title: "Webpack",
      message: "The build is complete!";
      sound: "Ping";
    })
  ],
  // ... snip ...
};

export default config;
```
