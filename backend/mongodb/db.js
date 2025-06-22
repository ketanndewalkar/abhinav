const mongoose = require("mongoose");

const mongoose_connect = () => {
    mongoose.connect("mongodb+srv://AbhinavTradex:AbhinavTradex@cluster0.t4wewxh.mongodb.net/Auth?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("mongoose is connected"))
    .catch((err)=>console.log(err));
}

module.exports = mongoose_connect;