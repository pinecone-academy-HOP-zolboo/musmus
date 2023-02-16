const mongoose = require("mongoose");

const uri = "";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
mongoose.set('strictQuery', true);
module.exports = connect;