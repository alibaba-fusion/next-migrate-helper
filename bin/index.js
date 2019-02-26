#! /usr/bin/env node
'use strict';

const program = require('commander');
const co = require('co');
const scan = require('../lib');
const { logger } = require('../lib/utils');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description('Scan your code and migrate to target version if you need')
  .option('-m --migrate', 'migrate your source files to target version automatically')
  .option('-t --target <version>', 'target version', 'v1')
  .action((sourcePath, argvs) => {
    co(function* () {
      try {
        yield* scan(sourcePath, argvs);
      } catch (err) {
        logger.error(err.stack);
      }
    });
  });

program
  .parse(process.argv);
