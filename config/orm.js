const connection = require("./connection");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
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

  // Create
  insertOne: (table, column, values, cb) => {
    let qs = `INSERT INTO ${table} (${column.toString()}) VALUES (${printQuestionMarks(values.length)})`;
    
    connection.query(qs, values, (err, result) => {
      if (err) { throw err; }
      cb(result);
    });
  },

  // Update
  updateOne(table, objColValues, condition, cb) {
    let qs = `UPDATE ${table} SET ${objToSql(objColValues)} WHERE ${condition}`;
    
    connection.query(qs, (err, result) => {
      if (err) { throw err; }
      cb(result);
    });
  },

  // Delete f(x) Bonus
  deleteOne(table, condition, cb) {
    var qs = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(qs, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }

};

module.exports = orm;