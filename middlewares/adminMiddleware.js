const multer = require("multer");

const imgpath = 'uploads/'

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, imgpath)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
})

module.exports.uploadImage = multer({ storage: storage }).single('image');
