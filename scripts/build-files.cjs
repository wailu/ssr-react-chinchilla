const path = require("path");
const { spawn } = require("child_process");

const webpackProcess = spawn(
  "yarn",
  ["webpack", "--config", "webpack.config.cjs"],
  {
    cwd: path.resolve(__dirname, ".."),
  }
);

const esbuildProcess = spawn("yarn", [
  "esbuild",
  "client/src/App.tsx",
  "--bundle",
  "--platform=node",
  "--format=esm",
  "--outdir=client/build",
  "--out-extension:.js=.node.mjs",
  "--external:react",
  "--external:react-router-dom",
]);

webpackProcess.stdout.on("data", (data) =>
  console.log("[webpack]", data.toString())
);
webpackProcess.stderr.on("data", (data) =>
  console.error("[webpack]", data.toString())
);
esbuildProcess.stdout.on("data", (data) =>
  console.log("[esbuild]", data.toString())
);
esbuildProcess.stderr.on("data", (data) =>
  console.error("[esbuild]", data.toString())
);

process.on("SIGINT", () => {
  console.log("\n", "Terminating child processes...");
  webpackProcess.kill();
  esbuildProcess.kill();
  console.log("\n", "Done!");
  process.exit();
});
