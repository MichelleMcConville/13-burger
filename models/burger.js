const orm = require("../config/orm.js");

const burger = {

  selectAll(cb) {
    orm.selectAll("burgers", (res) => { cb(res); });
  },

  insertOne(cols, values, cb) {
    orm.insertOne("burgers", cols, values, (res) => { cb(res); });
  },

  updateOne(objColValues, condition, cb) {
    orm.updateOne("burgers", objColValues, condition, (res) => { cb(res); });
  },

  delete(condition, cb) {
    orm.delete("burgers", condition, (res) => { cb(res); });
  }
  
}

module.exports = burger;