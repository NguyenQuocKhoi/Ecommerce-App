import orderModel from "../models/Order.js";
import productModel from "../models/Product.js";
export const createOrderController = async (req, res) => {
  try {
    const {
      shipingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
      orderStatus,
    } = req.body;
    await orderModel.create({
      user: req.user._id,
      shipingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
      orderStatus,
    });

    for (let i = 0; i < orderItems.length; i++) {
      const product = await productModel.findById(orderItems[i].product);
      product.stock = -orderItems[i].quantity;
      await product.save();
    }
    res.status(201).send({
      success: true,
      message: "Order Placed Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Order API",
      error
    });
  }
};
