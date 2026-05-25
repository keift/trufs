import type * as atomically from 'atomically';
import type fs_extra from 'fs-extra';
import type graceful_fs from 'graceful-fs';

export type Fs = typeof atomically & typeof fs_extra & typeof graceful_fs;
