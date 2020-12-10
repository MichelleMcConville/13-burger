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


selectAll()
insertOne()
updateOne()

module.exports = orm;