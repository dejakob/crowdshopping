var _index = function(request, response) {
    response.writeHead(404, {"Content-Type": "application/json"});
    var data = {
        'message': 'WELCOME'
    };
    response.end(JSON.stringify(data));
};

module.exports = _index;