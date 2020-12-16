const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
  lastName: String,
  firstName: String,
  startDate: String,
  endDate: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
//create Schema
/*const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})*/

module.exports = Item = mongoose.model("item", ItemSchema);
