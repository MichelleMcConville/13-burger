const orm = require("../config/orm.js");

const burger = {

  selectAll(cb) {
    orm.selectAll("burgers", (res) => { cb(res); });
  },

  insertOne(burger_name, cb) {
    console.log(this);
    orm.insertOne("burgers", ["burger_name", "devoured"], [burger_name, false], cb);
  },

  updateOne(id, cb) {
    let condition = `id = ${id}`;
    orm.updateOne("burgers", {devoured: true}, condition, cb);
  },

  // Bonus delete f(x)
  delete(id, cb) {
    let condition = `id = ${id}`;
    orm.delete("burgers", condition, (res) => { cb(res); });
  }

}

module.exports = burger;