
const Blogs = require("./../models/BlogModal")
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blogs.find()
        res.json({
            sucess: true,
            message: "All Blogs Fetched",
            result
        })
    } catch (error) {
        res.json({
            sucess: true,
            message: `Error ${error}`
        })
    }
}
exports.addBlogs = async (req, res) => {
    try {
        console.log(req.body);
        await Blogs.create(req.body)
        res.json({
            sucess: true,
            message: "Add Blogs ",
        })
    } catch (error) {
        res.json({
            sucess: true,
            message: `Error ${error}`
        })
    }
}
exports.deleteBlogs = async (req, res) => {
    try {
        console.log(req.body);
        const { id } = req.params
        await Blogs.findByIdAndDelete(id)
        res.json({
            sucess: true,
            message: "Delete Blogs ",
        })
    } catch (error) {
        res.json({
            sucess: true,
            message: `Error ${error}`
        })
    }
}
exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params
        await Blogs.findByIdAndUpdate(id, req.body)
        res.json({
            success: true,
            message: "updated Blog"
        })
    } catch (error) {
        json({
            success: true,
            message: "Error" + error
        })
    }
}