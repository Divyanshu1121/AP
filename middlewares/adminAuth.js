module.exports.adminAuth = (req, res, next) => {
    const { adminId } = req.cookies || {};
    if (adminId) {
        return next();
    } else {
        return res.redirect('/login');
    }
};
