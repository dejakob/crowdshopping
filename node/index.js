require('./base/globals.js');

couchdb.onConnect(function(db) {
    var API = require('./base/API.js');
    API.start();

});
