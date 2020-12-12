const connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.stString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) { value = "'" + value + "'"; }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {

  selectAll: (tableInput, cb) => {
    connection.query(`SELECT * FROM ${tableInput};`, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: (table, cols, values, cb) => {
    var qs = "INSERT INTO " + table;

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
    var qs = "UPDATE " + table;

    qs += " SET ";
    qs += objToSql(objColValues);
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
    var qs = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(qs, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }

};

module.exports = orm;
