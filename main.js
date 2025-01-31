const fs = require("node:fs");
module.exports = { ...fs }, (async () => Object.assign(module.exports, await import("atomically")))();