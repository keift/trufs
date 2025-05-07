import * as atomically from "atomically";
import * as fs_extra from "fs-extra";
import * as graceful_fs from "graceful-fs";

export const fs = Object.assign({}, graceful_fs, fs_extra, atomically);