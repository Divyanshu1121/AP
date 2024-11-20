const { Router } = require('express');

const AdminPanelCtrl = require('../controllers/admin-panelController');
const { adminAuth } = require('../middlewares/adminAuth');

const AProuter = Router();

AProuter.get('/', adminAuth, AdminPanelCtrl.homePage);
AProuter.post('/create', AdminPanelCtrl.createAdmin);
AProuter.get('/login', AdminPanelCtrl.loginPage);
AProuter.get('/signup', AdminPanelCtrl.signupPage);
AProuter.get('/add-admin', AdminPanelCtrl.addadminPage);
AProuter.get('/view-admin', AdminPanelCtrl.viewadminPage);
AProuter.get('/edit-admin/:id', AdminPanelCtrl.editadminPage);


AProuter.post('/login', AdminPanelCtrl.login)

module.exports = AProuter;