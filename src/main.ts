import * as atomically from "atomically";
import * as fs_extra from "fs-extra";
import * as graceful_fs from "graceful-fs";

import type { Fs } from "./types/main.type";

export const fs: Fs = Object.assign({}, graceful_fs, fs_extra, atomically);