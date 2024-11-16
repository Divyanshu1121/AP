const { Router } = require('express');
const Adminrouter = require("./adminRouter");
const AProuter = require('./admin_panelRouter');
const blogRouter = require("./blogRouter");

const router = Router();

router.use('/', Adminrouter);
router.use('/', AProuter);
router.use('/blog', blogRouter);
module.exports = router;