const notifier = require('node-notifier');

module.exports = class FirstBuildPlugin {
  constructor() {
    this.is_build = false;
  }

  apply(compiler) {
    compiler.hooks.done.tap('FirstBuildPlugin', () => {
      if (!this.is_build) {
        notifier.notify({
          title: 'webpack',
          message: 'ビルドが完了しました！',
          sound: 'Ping',
        });
        this.is_build = true;
      }
    });
  }
};