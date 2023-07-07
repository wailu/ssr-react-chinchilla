const path = require("path");
const { spawn } = require("child_process");

const nodeProcess = spawn("node", ["index.js"], {
  cwd: path.resolve(__dirname, "../server"),
});

nodeProcess.stdout.on("data", (data) => console.log("[node]", data.toString()));
nodeProcess.stderr.on("data", (data) =>
  console.error("[node]", data.toString())
);

process.on("SIGINT", () => {
  console.log("\n", "Terminating child processes...");
  nodeProcess.kill();
  console.log("\n", "Done!");
  process.exit();
});
