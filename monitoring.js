// Grab the Prometheus library
const client = require('prom-client');


// Store our default metrics/ the ON Switch in simpler terms (hardware etc.)
const collectDefaultMetrics = client.collectDefaultMetrics

// store our metrics in register to be shown to the world
collectDefaultMetrics({register: client.register})