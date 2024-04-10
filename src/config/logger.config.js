const winston = require('winston');


const logger = winston.createLogger({
    format : winston.format.combine(
        //First argument to the combine method if defining how we want the timestamp to comeup

        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),

        //second argument to the combine method,which defines what is exactly going to be printed is log

        winston.format.printf((log)=> `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ) 
})

