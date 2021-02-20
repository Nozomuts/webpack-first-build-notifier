import webpack from "webpack";
import { compile, getWebpackConfig } from "./util";
import notifier from "node-notifier";

it("The notification process is executed when a run", () => {
  const compiler = webpack(getWebpackConfig());

  compile(compiler).then(() => {
    expect(notifier.notify).toHaveBeenCalledWith({
      message: "The build is complete!",
      sound: "Ping",
      title: "Build Notification Test",
    });
  });
});
