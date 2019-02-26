const cp = require('child_process');
const path = require('path');
const { logger } = require('./utils');
const debug = require('debug')('next-migrate: index');
const execAsync = (...args) => new Promise((resolve, reject) => {
  cp.exec(...args, (err, stdout, stderr) => {
    err ? reject(err) : resolve(stdout || stderr);
  });
});
const spawnAsync = (...args) => new Promise((resolve, reject) => {
  const worker = cp.spawn(...args, { stdio: 'inherit' });
  worker.on('close', resolve);
  worker.on('error', reject);
});

module.exports = function* scan(sourcePath, argvs) {
  const output = yield execAsync('type jscodeshift >/dev/null 2>&1 || echo >&2 1');
  const exists = !(output.toString());
  if (!exists) {
    logger.warn('Installing jscodeshift global...');
    yield spawnAsync(/^win/.test(process.platform) ? 'tnpm.cmd' : 'tnpm', ['install', 'jscodeshift@0.4.x', '-g']);
  }

  const srcPath = path.join(process.cwd(), sourcePath);
  const transformerPath = path.resolve(__dirname, 'transformer.js');
  const dryMode = argvs.migrate ? '' : '-d';
  const target = argvs.target;
  const jscodeshiftArgs = [
    srcPath,
    '-t', transformerPath,
    '--extensions', 'js,jsx',
    '-s',
    '--parser=babylon',
    dryMode,
    `--target=${target}`
  ];
  debug('jscodeshiftArgs: %s', jscodeshiftArgs.join(' '));
  yield spawnAsync('jscodeshift', jscodeshiftArgs).then(() => {
    logger.success('\nRun successfully!');
  }).catch(e => {
    logger.error('\nRun failed:', e);
  });
};
