// Import MySQL connection
const connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.stString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  // Loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Turkey Burger => 'Turkey Burger')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Turkey Burger'} => ["name='Turkey Burger'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }
  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all SQL statement f(x)s
const orm = {

  selectAll(tableInput, cb) {
    const qs = "SELECT * FROM " + tableInput + ";";
    connection.query(qs, (err, result) => {
      if (err) { throw err; }
      cb(result);
    });
  },

  insertOne(table, cols, values, cb) {
    const qs = "INSERT INTO " + table;

    qs += " (";
    qs += cols.toString();
    qs += ") ";
    qs += "VALUES (";
    qs += printQuestionMarks(values.length);
    qs += ") ";

    console.log(qs);

    connections.query(qs, values, (err, result) => {
      if (err) { throw err; }
      cb(result);
    });
  },

  updateOne(table, objColValues, condition, cb) {
    const qs = "UPDATE " + table;

    qs += " SET ";
    qs += objColSql(objColValues);
    qs += " WHERE ";
    qs += condition;

    console.log(qs);

    connection.query(qs, (err, result) => {
      if (err) { throw err; }
      cb(result);
    });
  },

  // Bonus delete f(x)
  delete(table, condition, cb) {
    const qs = "DELETE FROM " + table;

    qs += " WHERE ";
    qs += condition;

    connection.query(qs, (err, result) => {
      if (err) { throw err; }
      cb(result);
    });
  }

};

module.exports = orm;
