
const express = require('express');
const router = express.Router();
const CategoryController = require('../controller/category');

router.post('/category', CategoryController.categoryController);
router.get('/category',CategoryController.getAllCategories);
router.get('/category/:Id',CategoryController.getCategoryById);
router.put('/category/:Id',CategoryController.updateCategoryById)
router.delete('/category/:Id',CategoryController.deleteById)

module.exports = router;
