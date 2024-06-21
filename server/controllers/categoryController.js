import categoryModel from "../models/Category.js";
import productModel from "../models/Product.js";
export const createCategoryController = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category) {
      return (
        res.status(404),
        send({
          success: false,
          message: "please provide category name",
        })
      );
    }
    await categoryModel.create({ category });
    res.status(201).send({
      success: true,
      message: `${category} category created successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Add Category API",
      error,
    });
  }
};

export const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Categories Fetch Successfully",
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get All Category API",
      error,
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);

    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    const products = await productModel.find({ category: category._id });
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = undefined;
      await product.save();
    }
    await category.deleteOne();
    res.status(200).send({
      success: true,
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid ID",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In Delete Category API",
      error,
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    const { updatedCategory } = req.body;

    const products = await productModel.find({ category: category._id });
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      product.category = updatedCategory;
      await product.save();
    }
    if (updateCategoryController) category.category = updatedCategory;
    
    await category.save();
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.name === "CastError") {
      return res.status(500).send({
        success: false,
        message: "Invalid ID",
      });
    }
    res.status(500).send({
      success: false,
      message: "Error In Update Category API",
      error,
    });
  }
};
