const path = require('path');
const fs = require('fs');
const shelljs = require('shelljs');

const validCommands = [
  'run',
  'exec',
  'bootstrap',
  'add',
  'updated',
  'clean',
  'diff',
  'link',
  'ls',
];

module.exports = (
  cwd,
  dir,
  mode,
  args
) => {
  const pathParts = cwd.split(path.sep);
  const index = pathParts.indexOf(dir);
  if (index < 0) {
    throw new Error(`Unable to find directory ${dir} in current working directory`);
  }
  const name = pathParts[index + 1];
  const rootdir = pathParts.slice(0, index).join('/');

  const pkg = JSON.parse(
    fs.readFileSync(
      path.join(rootdir, dir, name, 'package.json')
    )
  ).name;

  if (!validCommands.includes(args[0])) {
    args.unshift('exec yarn');
  }

  let cmd = [];

  if (mode === 'local') {
    cmd.push('yarn');
  }
  cmd.push('lerna');
  cmd.push(`--scope=${pkg}`);
  cmd = cmd.concat(args).join(' ');

  console.log(cmd);

  shelljs.cd(rootdir);
  shelljs.exec(
    cmd,
    { async: true },
    (code, stdout, stderr) => {
      if (code === 0) {
        console.log(stdout);
      } else {
        console.log(stderr);
      }
    }
  );
};
