const mongoose = require("mongoose")
const db = () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected".bgMagenta);
    } catch (error) {
        console.log(` Unable to Connented ${error}`)
        process.exit()     //server stop

    }
}
module.exports = db