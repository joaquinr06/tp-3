const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController')
const upload = require('../middlewares/Multer')
const logs = require('../logs/logs')

router.get('/results', logs, controller.buscador);
router.get('/listar', logs, controller.listar);
router.get('/:id', logs, controller.id);
router.post('/crear', logs, upload.single('image'), controller.crear);
router.put('/update/:id', logs, controller.update);
router.delete('/delete/:id', logs, controller.delete)
module.exports = router;
