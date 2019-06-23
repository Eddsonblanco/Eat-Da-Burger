var connection = require("../config/connection.js");


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    insertOne: function(name, cb) {
    
        connection.query("INSERT INTO burgers SET ?", {
          name: name,
          devoured: false
        }, function(err, result) {
          if (err) {
            return res.status(500).end();
          }

          cb(result);
        });
      },

    updateOne: function(burgerID, cb){

        // Run MySQL Query
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
            if (err) throw err;
            cb(result);
          });
    
      }
}

module.exports = orm;