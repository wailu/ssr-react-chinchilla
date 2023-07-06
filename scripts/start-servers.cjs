const path = require("path");
const { spawn } = require("child_process");

const serveProcess = spawn("yarn", [
  "serve",
  path.resolve(__dirname, "../client/build"),
  "-l",
  "3001",
]);
const nodeProcess = spawn("node", ["index.js"], {
  cwd: path.resolve(__dirname, "../server"),
});

serveProcess.stdout.on("data", (data) =>
  console.log("[serve]", data.toString())
);
serveProcess.stderr.on("data", (data) =>
  console.error("[serve]", data.toString())
);

nodeProcess.stdout.on("data", (data) => console.log("[node]", data.toString()));
nodeProcess.stderr.on("data", (data) =>
  console.error("[node]", data.toString())
);

process.on("SIGINT", () => {
  console.log("\nTerminating child processes...");
  serveProcess.kill();
  nodeProcess.kill();
  process.exit();
});
