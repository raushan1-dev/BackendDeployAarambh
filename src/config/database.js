const mongoose=require("mongoose")
const config= require("./config")

const connectDb=async()=>{
    await mongoose.connect(config._config.MONGO_URI)
}

module.exports=connectDb


// mongodb+srv://shikhakumari152019:AYD3W9yHCApCNYRz@cluster0.giz65if.mongodb.net/Aarambh38