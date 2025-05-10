import type * as atomically from "atomically";
import type * as fs_extra from "fs-extra";
import type * as graceful_fs from "graceful-fs";

export type Fs = typeof graceful_fs & typeof fs_extra & typeof atomically;