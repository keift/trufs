const graceful_fs = require("graceful-fs")
    , fs_extra = require("fs-extra");
module.exports = Object.assign({}, graceful_fs, fs_extra), (async () => Object.assign(module.exports, await import("atomically")))();