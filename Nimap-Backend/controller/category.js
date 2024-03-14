
const Category = require('../models/category');

const categoryController = async(req, res)=> {
    const { category_name, description } = req.body;
    try {
      const category = await Category.addCategory(category_name, description);
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  const getAllCategories = async (req, res) => {
    try {
      const result = await Category.getAllCategories(); 
      res.status(200).json({ msg: "success", data: result });
    } catch (error) {
      console.error('Error occurred while fetching categories:', error);
      res.status(500).json("Internal server error");
    }
  };

  const getCategoryById = async (req, res) => {
    const { Id } = req.params;
    try {
      const data = await Category.getCategoryById(Id);
      res.status(200).json({ msg: "success", data: data });
    } catch (error) {
      console.error('Error occurred while fetching category by ID:', error);
      res.status(500).json("Internal server error");
    }
  };

  const updateCategoryById=async(req,res)=>{
    const {Id}=req.params;
    const {data}=req.body;
    try{
        const result=await Category.updateCategoryById(Id,data);
        res.status(200).json({msg:"success",data:result});
    }catch (error) {
        console.error('Error occurred while updating category by ID:', error);
        res.status(500).json("Internal server error");
      }
  }

  const deleteById=async (req,res)=>{
    const {id}=req.params;
  
    try{
      const category=await Category.deleteCategory(id);
      res.status(200).json({response_code:200,response_msg:"success",data:category});
    } catch (error) {
        console.error('Error occurred while deleting category by ID:', error);
        res.status(500).json("Internal server error");
      }
  }

module.exports = {
    categoryController,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteById
}
