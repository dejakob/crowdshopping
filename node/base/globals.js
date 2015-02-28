(function Globals() {
    var qs = require('querystring');

    GLOBAL.couchdb = require('../services/couchdb');
    GLOBAL.utils = {
       getPostBullshit: function(request, cb) {
           if(request.method === "POST") {
               var data = "";

               request.on("data", function(chunk) {
                   data += chunk;
               });

               request.on("end", function() {
                   var json = qs.parse(data);
                   cb(json);
               });
           }
       }
    };
})();