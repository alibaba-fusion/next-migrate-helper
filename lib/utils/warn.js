const logger = require('./logger');

module.exports = (filePath, line, warnInfo) => {
  const { reason, success, more } = warnInfo;

  logger.warn(`- ${filePath} Line: ${line}`);
  reason && logger.error(`  Reason: ${reason}`);
  success && logger.success(`  success: ${success}`);
  more && logger.info(`  More info: ${more}`);
};
