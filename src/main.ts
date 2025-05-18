import * as Atomically from "atomically";
import * as FSExtra from "fs-extra";
import * as GracefulFS from "graceful-fs";

import type { Fs } from "./types/main.type";

export const fs: Fs = Object.assign({}, GracefulFS, FSExtra, Atomically);

export type * as Types from "./types/main.type";
<<<<<<< HEAD

=======
>>>>>>> 6b78c43a91ddf99127c3aa88a38dfcbc3e83624f
