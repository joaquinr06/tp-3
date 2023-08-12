const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController')
const upload = require('../middlewares/Multer')
const logs = require('../logs/logs')


router.get('/listar', logs, controller.listar);
router.get('/:id', logs, controller.id);
router.post('/crear', logs, upload.single('image'), controller.crear);



module.exports = router;
