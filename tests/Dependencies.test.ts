import Package from '../package.json';

if (Package.dependencies['@types/fs-extra'] !== 'latest') throw new Error('❌ Error: @types/fs-extra');
if (Package.dependencies['@types/graceful-fs'] !== 'latest') throw new Error('❌ Error: @types/graceful-fs');
if (Package.dependencies['@types/node'] !== 'latest') throw new Error('❌ Error: @types/node');
if (Package.dependencies.atomically !== 'latest') throw new Error('❌ Error: atomically');
if (Package.dependencies['fs-extra'] !== 'latest') throw new Error('❌ Error: fs-extra');
if (Package.dependencies['graceful-fs'] !== 'latest') throw new Error('❌ Error: graceful-fs');

if (Package.devDependencies.neatlint !== 'latest') throw new Error('❌ Error: neatlint');
if (Package.devDependencies.prettier !== 'latest') throw new Error('❌ Error: prettier');
if (Package.devDependencies.tsup !== 'latest') throw new Error('❌ Error: tsup');

console.log('✅ Success');
