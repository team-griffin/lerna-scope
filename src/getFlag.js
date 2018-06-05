const args = process.argv.slice(2);

module.exports = (name, fallback) => {
  for (let x = 0; x < args.length; x++) {
    const arg = args[x];
    if (arg == null) {
      return fallback;
    }
    if (arg.substr(0, 2) === '--') {
      if (arg.substr(2) === name) {
        return args[x + 1];
      }
    } else if (x % 2 === 0) {
      return fallback;
    }
  }
  return fallback;
};
