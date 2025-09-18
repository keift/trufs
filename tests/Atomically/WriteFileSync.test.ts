import { fs } from '../../src/main';

const interval = setInterval(() => {
  fs.writeFileSync('./tests/test.json', JSON.stringify({ updated_at: new Date().toISOString() }));
}, 5);

setTimeout(() => {
  clearInterval(interval);

  console.log('✅ Success');
}, 5000);
