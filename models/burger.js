const orm = require("../config/orm.js");
const burger = {

  selectAll(cb) {
    orm.selectAll("burgers", (res) => { cb(res); });
  },

  insertOne(cols, values, cb) {
    console.log(this);
    orm.insertOne("burgers", cols, values, (res) => { cb(res); });
  },

  updateOne(objColValues, condition, cb) {
    orm.updateOne("burgers", objColValues, condition, (res) => { cb(res) });
  },

  // Bonus delete f(x)
  deleteOne(condition, cb) {
    orm.deleteOne("burgers", condition, (res) => { cb(res); });
  },

}

module.exports = burger;