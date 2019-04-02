const winston = require('winston')

const configLog = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    verbose: 'cyan',
    debug: 'blue',
    silly: 'magenta',
  },
}

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: 'all',
      level: 'debug',
      prettyPrint(object) {
        return JSON.stringify(object)
      },
    }),
    new winston.transports.File({
      filename: './userSignInUp.log',
      maxFiles: 5 /* numero de arquivos criados */,
      maxsize: 10000000 /* 10MB em Bytes */,
      tailable: true /* rotaciona o log */,
      level: 'debug',
    }),
  ],
  levels: configLog.levels,
  colors: configLog.colors,
})

module.exports = logger
