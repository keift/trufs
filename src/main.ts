import * as atomically from 'atomically';
import fs_extra from 'fs-extra';
import graceful_fs from 'graceful-fs';

import type { Fs } from './types/fs';

export const fs: Fs = Object.assign({}, graceful_fs, fs_extra, atomically);

export type * from './exports/types';
