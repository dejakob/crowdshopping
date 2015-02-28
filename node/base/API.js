var _start = function() {
    var http = require('http');
    var fs = require('fs');
    http.createServer(function(req, res) {
        var url = req.url;
        var urlSplitter = url.split('/');
        fs.exists('./controller' + url + '/index.js', function(exists) {
            if (exists) {
                try {
                    var controller = require('../controller' + url + '/index.js');
                    controller(req,res);
                } catch (ex) {
                    console.log('ERR', ex);
                    res.writeHead(404, {"Content-Type": "application/json"});
                    res.end(JSON.stringify({'error': "Surprise: ERROR"}));
                }
            } else {
                res.writeHead(404, {"Content-Type": "application/json"});
                res.end(JSON.stringify({'error': "Surprise: ERROR"}));
            }
        })
    }).listen(8000);


    /*db.uniqid(1, function (err, ids) { // or even simplier: couch.uniqid(function (err, ids) {
        if (err)
            return console.error(err);

        console.dir(ids);
    });*/
};

module.exports = {
   'start': _start
};