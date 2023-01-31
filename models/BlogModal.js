const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provider Title"]
    },
    desc: {
        type: String,
        required: [true, "Please Provider desc"]
    },
    image: {
        type: String,
        required: [true, "Please Provider Image"]
    },
    publish: {
        type: Boolean,
        default: false
    },
})
module.exports = mongoose.model("blogs", blogSchema)