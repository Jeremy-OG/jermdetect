// import tools and frameworks
const express = require('express');
const client = require('prom-client');

// create my web server and open standard dev port(3000)
const app = express()
const port = 3000;

//  grab my default metrics from prom and tell app to store them in "register"
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register});

// create our custom counter login checker metric in prom for extra security measure
const loginAttempts = new client.Counter({
    name: 'jermdetect_login_attempts_total',
    help: 'Total number of login attempts caught by JermDetect',
    labelNames:['status']
});