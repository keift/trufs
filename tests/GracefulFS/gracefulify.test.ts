import { fs } from '../../src/main';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (fs.gracefulify === undefined) throw new Error('❌ Error');

console.log('✅ Success');
