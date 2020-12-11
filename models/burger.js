const orm = require("../config/orm.js");

const burger = {

selectAll(cb) {
  orm.selectAll("burgers", (res) => { cb(res); });
},

insertOne(cols, values, cb) {
  orm.insertOne("burgers", cols, values, (res) => { cb(res); });
},

updateOne: function() {},

}

module.exports = burger;