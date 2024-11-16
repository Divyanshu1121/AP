const blogs = require("../models/blogSchema");
const fs = require('fs');

module.exports.addblogPage = (req, res) => {
    let { adminId } = req.cookies || {};
    console.log("Cookies:", req.cookies);
    if (!adminId) {
        console.log("Admin ID is undefined. Redirecting to login.");
        return res.redirect('/login');
    }
    return res.render('./pages/add-blog', { adminId });
};

module.exports.viewblogPage = async (req, res) => {
    try {
        let { adminId } = req.cookies;
        let data = await blogs.find({ adminId });
        return res.render('./pages/view-blog', { data });
    } catch (error) {
        console.log(error);
        return res.render('./pages/view-blog');
    }
};

module.exports.addblog = async (req, res) => {
    try {
        await blogs.create(req.body);
        console.log("Blog created.");
        return res.redirect('./pages/add-blog');
    } catch (error) {
        console.log(error);
        return res.redirect('./pages/add-blog');
    }
};

module.exports.allblogPage = async (req, res) => {
    try {
        let { adminId } = req.cookies;
        let data = await blogs.find({});
        return res.render('./pages/all-blog', { data, adminId });
    } catch (error) {
        console.log(error);
        return res.render('./pages/all-blog');
    }
};

module.exports.editBlog = async (req, res) => {
    try {
        let { adminId } = req.params;
        let adminData = await admin.findByIdAndUpdate(adminId, req.body);
        return res.redirect('/view-blog');
    } catch (error) {
        console.log(error);
        return res.redirect('/view-blog');
    }
};

module.exports.deleteAdminData = async (req, res) => {
    try {
        const { adminId } = req.params;
        const deletedData = await admin.findByIdAndDelete(adminId);

        if (!deletedData) {
            return res.status(404).send("Admin data not found.");
        }
        return res.redirect('/view-blog');
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error while deleting admin data.");
    }
};

module.exports.likeBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let blog = await blogs.findById(id);
        let { adminId } = req.cookies;

        let adminIndex = blog.likeBy.indexOf(adminId);
        console.log(blog);

        if (adminIndex === -1) {
            blog.likeBy.push(adminId);
        } else {
            blog.likeBy.splice(adminIndex, 1);
        }

        await blog.save();
        return res.redirect('/blog/all-blog');
    } catch (error) {
        console.log(error);
        return res.redirect('/blog/all-blog');
    }
};