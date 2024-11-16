const { Router } = require("express");
const blogCtrl = require('../controllers/blogController');

const blogRouter = Router();

blogRouter.get('/add-blog', blogCtrl.addblogPage);
blogRouter.post('/add-blog', blogCtrl.addblog);

blogRouter.get('/view-blog', blogCtrl.viewblogPage);

blogRouter.get('/edit-blog/:adminId', blogCtrl.editBlog);
blogRouter.get('/delete-blog/:adminId', blogCtrl.deleteAdminData);

blogRouter.get('/all-blog', blogCtrl.allblogPage);
blogRouter.get('/blog/like/:id', blogCtrl.likeBlog);

module.exports = blogRouter;