const {configure} = require('log4js');

module.exports = {
    log4s: configure({
        appenders: { cheese: { type: "file", filename: "cheese.log" } },
        categories: { default: { appenders: ["cheese"], level: "debug" }}
    })
}