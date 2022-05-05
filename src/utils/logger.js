const {createLogger, format, transports} = require('winston');

module.exports = {
    logger: createLogger({
        format: format.combine(
            format.simple(), 
            format.label({label: `🔔`}),
            format.align(),
            format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.printf((info) => {
                return `[${info.label} ${info.timestamp}] ${info.level} ${info.message}`;
            })
        ),
        transports: [
            new transports.File({
                maxsize: 10485760,
                maxFiles: 10,
                name: 'error-log',
                filename: `${__dirname}/../logs/error-log.log`,
                level: 'error'
            }),
            new transports.File({
                maxsize: 10485760,
                maxFiles: 10,
                name: 'warn-log',
                filename: `${__dirname}/../logs/warning-log.log`,
                level: 'warn'
            }),
            new transports.File({
                maxsize: 10485760,
                maxFiles: 10,
                name: 'info-log',
                filename: `${__dirname}/../logs/info-log.log`,
                level: 'info'
            }),
            new transports.File({
                maxsize: 10485760,
                maxFiles: 10,
                name: 'http-log',
                filename: `${__dirname}/../logs/http-log.log`,
                level: 'http'
            }),
            new transports.File({
                maxsize: 10485760,
                maxFiles: 10,
                name: 'verbose-log',
                filename: `${__dirname}/../logs/verbose-log.log`,
                level: 'verbose'
            }),
            new transports.File({
                maxsize: 10485760,
                maxFiles: 10,
                filename: `${__dirname}/../logs/node.log`,
                level: 'debug'
            }),
            new transports.File({
                maxsize: 10485760,
                maxFiles: 10,
                name: 'silly-log',
                filename: `${__dirname}/../logs/silly-log.log`,
                level: 'silly'
            }),
            /* new transports.Console({
                level: 'error'
            }) */
        ]
    })
} 