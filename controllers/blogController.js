const Blog = require("../models/blogSchema");

module.exports.addblogPage = (req, res) => {
    let { adminId } = req.cookies;
    return res.render('./pages/add-blog', {
        adminId
    });
}

module.exports.addblog = async (req, res) => {
    try {
        let { adminId } = req.cookies;
        await Blog.create(req.body);
        console.log("blog is created");
        return res.redirect('back')
    } catch (error) {
        console.log(error);
        return res.redirect('back')
    }
}

module.exports.viewblogPage = async (req, res) => {
    try {
        let { adminId } = req.cookies;
        let data = await Blog.find({ adminId });
        console.log(data)
        return res.render('./pages/view-blog', { data });
    } catch (error) {
        console.log(error);
        return res.render('./pages/view-blog');
    }
}

module.exports.allblogPage = async (req, res) => {
    try {
        let { adminId } = req.cookies;
        let data = await Blog.find({});
        return res.render('./pages/all-blog', { data, adminId });
    } catch (error) {
        console.log(error);
        return res.render('./pages/all-blog');
    }
}

module.exports.deleteblog = async (req, res) => {
    try {
        let { adminId } = req.params;
        let data = await Blog.findByIdAndDelete(adminId);
        // console.log(data);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');

    }
}

module.exports.editblogPage = async (req, res) => {
    try {
        let { adminId } = req.params;
        let data = await Blog.findById(adminId);
        // console.log(data);
        return res.render('./pages/edit-blog', { data });
    } catch (error) {
        console.log(error);
        return res.render('./pages/edit-blog');
    }

}

module.exports.editblog = async (req, res) => {
    try {
        let { editId } = req.body;
        let data = await Blog.findByIdAndUpdate(editId, req.body)
        console.log(data);
        return res.redirect("/blog/view-blog")
    } catch (error) {
        console.log(error);
        return res.redirect("/blog/view-blog")
    }
}


module.exports.likeBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let blog = await Blog.findById(id);
        let { adminId } = req.cookies;
        let adminIndex = blog.likeBy.indexOf(adminId);
        console.log(blog);

        if (adminIndex == -1) {
            blog.likeBy.push(adminId);
        }
        else {
            blog.likeBy.splice(adminIndex, 1);
        }
        await blog.save();

        return res.redirect('/blog/all-blog');
    } catch (error) {
        console.log(error);
        return res.redirect('/blog/all-blog');
    }
}
