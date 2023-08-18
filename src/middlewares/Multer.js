const path = require('path');
const multer = require('multer');



const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, `image -${Date.now()})${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: Storage,            // nombre de la variable si fuera otra
  limits: {
    fileSize: 5000000 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return cb(new Error('Subir Solo fotos con Formato JPG o PNG'))
    }
    cb(undefined, true)
  }
})
module.exports = upload



