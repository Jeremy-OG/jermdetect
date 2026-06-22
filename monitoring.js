// Grab the Prometheus library
const client = require('prom-client');


// Store our default metrics/ the ON Switch in simpler terms (hardware etc.)
const collectDefaultMetrics = client.collectDefaultMetrics

// store our metrics in register to be shown to the world
collectDefaultMetrics({register: client.register})

// track the duration of each type of http request and mark them in buckets
const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method','route', 'code'],
    buckets: [0.1,0.3,0.5,0.7,1,3,5]
});

// implement middleware to start http tracking
const requestTimer = (req,res,next) => {
    const end = httpRequestDurationMicroseconds.startTimer();
    res.on('finish',()=> {
        end({ method: req.method, route: req.route ? req.route.path : req.url, code: res.statusCode});
    });
    next();

};

module.exports = {
    client,
    requestTimer
};