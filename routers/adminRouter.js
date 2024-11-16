const { Router } = require('express');

const AdminCtrl = require('../controllers/adminController');
const { uploadImage } = require('../middlewares/adminMiddleware');
const adminrouter = Router();

adminrouter.post('/add-admin', uploadImage, AdminCtrl.addAdminData);
adminrouter.post('/edit-admin/:adminId', uploadImage, AdminCtrl.editAdminData);
adminrouter.get('/delete-admin/:adminId', AdminCtrl.deleteAdminData);
adminrouter.get('/logout', AdminCtrl.logout);

module.exports = adminrouter;