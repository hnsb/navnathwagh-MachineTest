const productController=require('../controller/product')

const router=require('express').Router();

router.post('/product',productController.addProduct);
router.get('/product',productController.getAllProduct);
router.put('/product',productController.updateProductById);
router.delete('/product/:Id',productController.deleteById)
router.get('/getByPagination/:pageno/:limit', productController.getProductsByPagination);
  


module.exports=router;