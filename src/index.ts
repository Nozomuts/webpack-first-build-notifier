import notifier from "node-notifier";
import webpack from "webpack";
import { Config } from "./types";

export default class WebpackFirstBuildNotifierPlugin {
  is_first_build: boolean;
  title: string;
  message: string;
  sound: string;

  constructor({ title, message, sound }: Config) {
    this.is_first_build = true;
    this.title = title ?? "webpack-first-build-plugin";
    this.message = message ?? "The build is complete!";
    this.sound = sound ?? "Ping";
  }

  apply(compiler: webpack.Compiler) {
    compiler.hooks.done.tap("first-build", () => {
      if (this.is_first_build) {
        notifier.notify({
          title: this.title,
          message: this.message,
          sound: this.sound,
        });
        this.is_first_build = false;
      }
    });
  }
}

module.exports = WebpackFirstBuildNotifierPlugin;
