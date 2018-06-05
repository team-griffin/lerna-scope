#! /usr/bin/env node
const path = require('path');
const run = require('../src/run');
const getFlag = require('../src/getFlag');
const getArgs = require('../src/getArgs');

const cwd = path.resolve('.');
const args = getArgs();
const dir = getFlag('dir', 'packages');
const mode = getFlag('mode', 'local') === 'global' ? 'global' : 'local';

run(cwd, dir, mode, args);
