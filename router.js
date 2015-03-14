// The router analyzes the request path and return the appropriate response. The response will be instantiated by the server and given back to the user.

var routes = [
    '/'       ,
    '/blog'   ,
    '/about'  ,
    '/contact',
];

function route(pathname) {
    console.log("About to route a request for " + pathname);

    var route_id = routes.indexOf(pathname)
    if (route_id == -1) {
        console.log("404 - not found");
        return 404;
    }
    else {
        console.log(pathname);
        return pathname;
    }
}

exports.route = route;
