let express = require('express'),
    path = require('path'),
    rootPath = path.normalize(__dirname);

let config = {
    staticRoot: rootPath,
    port: 8080
};
/**
 * Server
 */

let app = express();

//set headers allowing CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * req res cycle
 */
//serve static
app.use(express.static(config.staticRoot));


//simple json response
app.use('/json', function(req, res){
    res.json([
        {title: 'title 1'},
        {title: 'title 2'},
        {title: 'title 3'},
        {title: 'title 4'},
        {title: 'title 5'}
    ]);
});

//other routes fallback
app.use('*', function(req, res){
    res.send('No such route');
});


module.exports = app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:' + config.port + '\n')
});


