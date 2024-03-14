
const pool = require('../db.config'); 


const addCategory= async (categoryName, description)=> {
    const query = 'INSERT INTO category (category_name, description) VALUES ($1, $2) RETURNING *';
    const values = [categoryName, description];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
  const getAllCategories = async () => {
    try {
      const data = await pool.query('SELECT * FROM category');
      return data.rows;
    } catch (error) {
      console.error('Error occurred in fetching all categories:', error);
      throw error; 
    }
  };

  
const getCategoryById = async (Id) => {
    try {
      const result = await pool.query('SELECT * FROM category WHERE id = $1', [Id]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        return user;
      } else {
        return console.log("Category not found ..!!"); 
      }
    } catch (error) {
      throw error; 
    }
  };

  const updateCategoryById = async (Id, updatedCategoryData) => {
    try {
      if (!updatedCategoryData) {
        throw new Error("Updated category data is undefined");
      }
  
      const { category_name, description } = updatedCategoryData;
      if (!category_name || !description) {
        throw new Error("Category name or description is missing in updated data");
      }
  
      const result = await pool.query(
        'UPDATE category SET category_name = $1, description = $2 WHERE id = $3 RETURNING *',
        [category_name, description, Id]
      );
      
      return result.rows;
    } catch (error) {
      throw error;
    }
  };
  
  const deleteCategory = async (Id) => {
    try {
      const result = await pool.query('DELETE FROM category WHERE id = $1 RETURNING *', 
      [Id]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }


module.exports = {
    addCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategory
}


