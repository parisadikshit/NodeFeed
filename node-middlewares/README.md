# Middlewares in Express
Middleware functions have access to request object, response object allowing them to modify these objects before passed to the next middleware in the stack or to the route handler.
This capability is essential for tasks like parsing the request data, adding headers or modifying the response

Middleware functions are executed in the order they are declared