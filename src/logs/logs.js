const express = require('express');
const fs = require('fs');
const path = require('path');


const logs = (req, res, next) => {
    fs.appendFileSync(path.resolve(__dirname, '../logs/logs.txt'), `Ruta - ${req.originalUrl}\n`)
    next();
}
module.exports = logs;