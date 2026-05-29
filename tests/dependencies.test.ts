import _package from '../package.json';

const dependencies = {
  '@types/fs-extra': 'latest',
  '@types/graceful-fs': 'latest',
  atomically: 'latest',
  'fs-extra': 'latest',
  'graceful-fs': 'latest'
};

const dev_dependencies = {
  prettier: 'latest',
  rulint: 'latest',
  tsdown: 'latest',
  unrun: 'latest'
};

for (const [_dependency, version] of Object.entries(dependencies)) {
  const dependency = _dependency as keyof typeof dependencies;

  if (_package.dependencies[dependency] !== version) {
    throw new Error(`❌ Error: ${dependency}`);
  }
}

for (const [_dependency, version] of Object.entries(dev_dependencies)) {
  const dependency = _dependency as keyof typeof dev_dependencies;

  if (_package.devDependencies[dependency] !== version) {
    throw new Error(`❌ Error: ${dependency}`);
  }
}

console.log('✅ Success');
