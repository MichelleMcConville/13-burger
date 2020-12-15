const orm = require("../config/orm.js");
const burger = {

  selectAll(cb) {
    orm.selectAll("burgers", (res) => { cb(res); });
  },

  insertOne(cols, values, cb) {
  //2 insertOne(burger_name, cb) {
    console.log(this);
    orm.insertOne("burgers", cols, values, (res) => { cb(res); });
    //2 orm.insertOne("burgers", ["burger_name", "devoured"], [burger_name, false], cb);
    
  },

  updateOne(objColValues, condition, cb) {
  // updateOne(id, cb) {
    // let condition = `id = ${id}`;
    orm.updateOne("burgers", objColValues, condition, (res) => { cb(res) });
    // orm.updateOne("burgers", { devoured: true }, condition, cb);
  },

  // Bonus delete f(x)
  deleteOne(condition, cb) {
  //2 deleteOne(id, cb) {
    //2 let condition = `id = ${id}`;
    orm.deleteOne("burgers", condition, (res) => { cb(res); });
    //2 ("burgers", condition, (res) => { cb(res); });
  },

}

module.exports = burger;