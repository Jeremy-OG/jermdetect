// import tools and frameworks
const express = require('express');
const client = require('prom-client');

// create my web server and open standard dev port(3000)
const app = express()
const port = 4000;

//Home route
app.get('/', (req, res)=>{
    res.send('<h1>JermDetect is Online</h1><p>Security monitoring active</p>');
});

//  grab my default metrics from prom and tell app to store them in "register"
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register});

// create our custom counter login checker metric in prom for extra security measure
const loginAttempts = new client.Counter({
    name: 'jermdetect_login_attempts_total',
    help: 'Total number of login attempts caught by JermDetect',
    labelNames:['status']
});

// Our coin flip security test({login route} simulation of login attempt and logging)

app.get('/login', (req,res)=> {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess){
        loginAttempts.inc({ status : 'success'});
        res.send ('Login Successful.');
    } else {
        loginAttempts.inc({status : 'failure'});
        res.status(401).send('Login Failed - Activity Logged.');
    }
})

// Our raw data feed route for prom to scrape data
app.get('/metrics', async (req, res)=>{
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

// start our server and tell it to listen for users, run application
app.listen(port, ()=>{
    console.log (`JermDetect is running at http://localhost:${port}`);
});
