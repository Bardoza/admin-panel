import winston from 'winston';

const levels = {
  testing: 'error',
  production: 'info',
};

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: levels[process.env.NODE_ENV] || 'info',
      colorize: true,
      timestamp: true,
      prettyPrint: true,
      label: 'admin-panel',
    }),
  ],
});

logger.stream = {
  write: message => logger.info(message),
};
