const product=require('../models/product')

const addProduct=async(req,res)=>{
  const {product_name, price, category_id, brand, stock_quantity}= req.body;

  try{
       const result= await product.addProduct(product_name, price, category_id, brand, stock_quantity);
       res.status(200).json({msg:'success',data:result});
  }catch(error){
    console.error('Error occuring during the add product',error);
    res.status(500).json("Internal server Error");
  }
}

const getAllProduct=async(req,res)=>{
    try{
        const result=await product.getAllProduct();
        res.status(200).json({msg:"success",data:result});
    }catch(error){
        console.error('Error occuring during the add product',error);
        res.status(500).json("Internal server Error");
      }
}
const updateProductById=async(req,res)=>{
    const {Id}=req.params;
    const {data}=req.body;
    try{
        const result=await product.updateCategoryById(Id,data);
        res.status(200).json({msg:"success",data:result});
    }catch (error) {
        console.error('Error occurred while updating product by ID:', error);
        res.status(500).json("Internal server error");
      }
  }

  const deleteById=async (req,res)=>{
    const {id}=req.params;
  
    try{
      const product =await product.deleteCategory(id);
      res.status(200).json({response_code:200,response_msg:"success",data:category});
    } catch (error) {
        console.error('Error occurred while deleting product by ID:', error);
        res.status(500).json("Internal server error");
      }
  }
  
const getProductsByPagination=async(req, res)=> {
  try {
      const pageNo = parseInt(req.params.pageno);
      const limit = parseInt(req.params.limit);

      if (isNaN(pageNo) || isNaN(limit) || pageNo < 1 || limit < 1) {
          return res.status(400).json({ error: 'Invalid page number or limit' });
      }

      const products = await ProductModel.getProductsByPagination(pageNo, limit);

      if (products.length === 0) {
          return res.status(404).json({ message: 'No products found for the given page and limit' });
      }

      res.json(products);
  } catch (error) {
      console.error('Error fetching products by pagination:', error);
      res.status(500).send('Internal Server Error');
  }
}

module.exports={
    addProduct,
    getAllProduct,
    updateProductById,
    deleteById,
    getProductsByPagination
}