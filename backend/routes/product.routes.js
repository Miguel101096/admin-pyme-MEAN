const express = require("express");
const router = express.Router();
const productCtrl = require('../controllers/product.controller');
router.get('/', productCtrl.getProducts);
router.post('/save', productCtrl.saveProduct);
router.get('/:id?', productCtrl.getProduct);
router.delete('/:id?', productCtrl.deleteProduct);
router.put('/:id?', productCtrl.updateProduct);
module.exports = router;