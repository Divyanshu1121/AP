const { Router } = require('express');

const AdminPanelCtrl = require('../controllers/admin-panelController');
const { adminAuth } = require('../middlewares/adminAuth');
const AProuter = Router();

AProuter.get('/', adminAuth, AdminPanelCtrl.homePage)
AProuter.get('/login', AdminPanelCtrl.loginPage);
AProuter.get('/signup', AdminPanelCtrl.signupPage);
AProuter.get('/add-admin', AdminPanelCtrl.addAdminPage);
AProuter.get('/view-admin', AdminPanelCtrl.viewAdminPage);
AProuter.get('/edit-admin/:id', AdminPanelCtrl.editAdminPage);


AProuter.post('/login', AdminPanelCtrl.login)

module.exports = AProuter;