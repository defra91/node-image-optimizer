'use strict';

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
const Colors = require('./colors');
const Symbols = require('./symbols');

const WinstonLogger = createLogger({
  format: combine(timestamp(), format.json()),
  transports: [
    new transports.File({ filename: 'log/combined.log' })
  ]
});

module.exports.log = (message, level = 'info') => {
  WinstonLogger.log({
    level: level,
    message: message
  });
  return formatMessage(message, level);
}

const formatMessage = (message, level) => {
  return console.log(Colors.level2Color(level), `${Symbols.level2Symbol(level)} ${message}`);
}
