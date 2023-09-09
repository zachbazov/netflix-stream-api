// MARK: - Application

const app = require("./app");

// MARK: - Server
// Server Port
const port = 8000;

// Environment Logger
console.log(app.get("env"));

// Server Deployment
const server = app.listen(port, () => {
  console.log(`PORT: ${port}\nENVIRONMENT: ${app.get("env")}`);
  console.log("DATABASE: 🟢");
});

// MARK: - Unhandled Rejection Error

process.on("unhandledRejection", (err) => {
  console.log(`[UnhandledRejection] 💥 [${err.name}]`, err.message);
  server.close(() => process.exit(1));
});

// MARK: - SIGTERM
// A signal that used to cause a problem to really stop running.
process.on("SIGTERM", () => {
  console.log("[SIGTERM] 💥 received, shutting down...");
  server.close(() => console.log("[SIGTERM] 💥 process terminated."));
});
