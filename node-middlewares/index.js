const express = require("express");
const app = express()

// Global Middleware

// This middleware function just runs before the request reaches the route handler
const consoleMiddleware = (req,res,next) => {
    console.log('This is a custom middleware!');
    next()
}


// Registering the middleware
app.use(consoleMiddleware)

// Middleware to modify the request object
app.use((req,res,next) => {
    req.customProperty = 'Added more spark';
    next();

})

// Middleware to modify the response object
app.use((req,res,next)=> {
    res.on('finish',()=> {
        console.log(`Status code:${res.statusCode}`)
    })
    next();
})
// route handler
app.get('/', (req,res)=> {
    
    res.send(`Sparks fly, so, ${req.customProperty || 'You can too'}!`);
})

// server 

const port = 3000;
app.listen(port, ()=> {
    console.log(`Server is running at 3000`)
})