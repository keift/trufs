import * as Atomically from 'atomically';
import * as FSExtra from 'fs-extra';
import * as GracefulFS from 'graceful-fs';

import type { Fs } from './types/fs';

export const fs: Fs = Object.assign({}, GracefulFS, FSExtra, Atomically);

export type * from './exports/types';
