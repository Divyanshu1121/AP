const { Router } = require("express");
const blogController = require("../controllers/blogController")

const blogRouter = Router()

blogRouter.get('/add-blog', blogController.addblogPage);
blogRouter.post('/add-blog', blogController.addblog);

blogRouter.get('/view-blog', blogController.viewblogPage);

blogRouter.get('/delete-blog/:adminId', blogController.deleteblog);

blogRouter.get('/edit-blog/:adminId', blogController.editblogPage);
blogRouter.post('/edit-blog/:adminId', blogController.editblog);


blogRouter.get('/all-blog', blogController.allblogPage);


blogRouter.get('/:id', blogController.likeBlog)

module.exports = blogRouter;