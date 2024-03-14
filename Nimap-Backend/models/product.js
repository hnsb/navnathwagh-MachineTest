const pool=require('../db.config');

const addProduct= async ( product_name,price,category_id,brand,stock_quantity)=> {
    const query = ' INSERT INTO product (product_name, price, category_id, brand, stock_quantity) VALUES ($1, $2, $3, $4, $5)RETURNING *';
    const values = [product_name,price,category_id,brand,stock_quantity];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  const getAllProduct=async()=>{
    const query='SELECT * from product';
    try{
        const result=await pool.query(query);
        return result.rows;
    }catch(error){
        throw error;
    }
  }
  const updateProductById = async (Id, updatedProductData) => {
    try {
      if (!updatedProductData) {
        throw new Error("Updated product data is undefined");
      }
  
      const { product_name,price,category_id,brand,stock_quantity } = updatedProductData;

      const result = await pool.query(
        'UPDATE product SET product_name = $1, price = $2,category_id=$3,brand=$4,stock_quantity=$5 WHERE id = $6 RETURNING *',
        [product_name,price,category_id,brand,stock_quantity]
      );
      
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteProduct = async (Id) => {
    try {
      const result = await pool.query('DELETE FROM product WHERE id = $1 RETURNING *', 
      [Id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  const  getProductsByPagination=async(pageNo, limit)=> {
    try {
        const offset = (pageNo - 1) * limit;

        const query = `SELECT * FROM product ORDER BY ProductId LIMIT $1 OFFSET $2`;
        const values = [limit, offset];

        const result = await pool.query(query, values);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

  module.exports={
    addProduct,
    getAllProduct,
    updateProductById,
    deleteProduct,
    getProductsByPagination
  }