const mongoose = require("mongoose");

const uri = "mongodb+srv://Erdenebulgan:bulgaa1106@cluster0.mggs5zn.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("database Connected");
  } catch (error) {
    console.log(error);
  }
};
mongoose.set('strictQuery', true);
module.exports = connect;