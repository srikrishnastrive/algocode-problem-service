const winston = require('winston');

const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');
const { Writable } = require('stream');
const { logToCosmoDB } = require('../clientapis/consmosClient');




const allowedTransports = [];

const customStream = new Writable({
    write(chunk,encoding,callback){
        const message = chunk.toString();
        console.log("Log intercepted in custom transport",message);
        logToCosmoDB("error",message);
        callback();
    }
})

const customStreamTransport = new winston.transports.Stream({
    stream: customStream
});

allowedTransports.push(customStreamTransport);

// The below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// The below transport configuration enables logging in mongodb database
allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URL,
    collection:'logs',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)

    )

}))

allowedTransports.push(new winston.transports.File({
    filename:'app.log'
}))


const logger = winston.createLogger({
    // default formatting


    format: winston.format.combine(
        // First argument to the combine method is defining how we want the timestamp to come up
        winston.format.errors({stack:true}),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log

        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;