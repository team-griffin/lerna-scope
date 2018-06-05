const args = process.argv.slice(2);

module.exports = () => {
  const result = args.slice();
  for (let x = 0; x < args.length; x++) {
    const arg = args[x];
    if (arg.substr(0, 2) === '--') {
      result.shift();
    } else if (x % 2 === 1) {
      result.shift();
    } else {
      break;
    }
  }
  return result;
};
