const { getAllBlogs, addBlogs, deleteBlogs, updateBlog } = require("../controller/BlogControllers")

const router = require("express").Router()
router
    .get("/", getAllBlogs)
    .post("/add", addBlogs)
    .delete("/:id", deleteBlogs)
    .put("/:id", updateBlog)
module.exports = router