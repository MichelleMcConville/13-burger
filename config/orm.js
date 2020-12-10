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
      if (typeof value === "string" && value.indexOf(" ") >=0) {
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
  selectAll() {},
  insertOne() {},
  updateOne() {},
}

module.exports = orm;