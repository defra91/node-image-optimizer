const LogSymbols = require('log-symbols');

module.exports.level2Symbol = (level = 'info') => {
  const map = {
    'info': LogSymbols.info,
    'success': LogSymbols.success,
    'warning': LogSymbols.warning,
    'error': LogSymbols.error
  };
  if (map[level] !== undefined) {
    return map[level];
  } else {
    return map['info'];
  }
};
