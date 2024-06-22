import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    shipingInfo: {
      address: {
        type: String,
        required: [true, "address is required"],
      },
      city: {
        type: String,
        required: [true, "city name is required"],
      },
      country: {
        type: String,
        required: [true, "country name is required"],
      },
    },
    orderItems: [
      {
        name: {
          type: String,
          required: [true, "product name is require"],
        },
        price: {
          type: Number,
          required: [true, "product price is require"],
        },
        quantity: {
          type: Number,
          required: [true, "product quantity is require"],
        },
        image: {
          type: String,
          required: [true, "image product is require"],
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          require: true,
        },
      },
    ],
    paymentMethod: {
      type: String,
      enum: ["COD", "ONLINE"],
      default: "COD",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "user id is require"],
    },
    paidAt: Date,
    paymentInfo: {
      id: String,
      status: String,
    },
    itemPrice: {
      type: Number,
      required: [true, "item price is require"],
    },
    tax: {
      type: Number,
      required: [true, "tax is require"],
    },
    shippingCharges: {
      type: Number,
      required: [true, "shippingCharges is require"],
    },
    totalAmount: {
      type: Number,
      required: [true, "totalAmount is require"],
    },
    orderStatus: {
      type: String,
      enum: ["processing", "shipped", "deliverd"],
      default: "processing",
    },
    deliverAt: Date,
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("Orders", orderSchema);
export default orderModel;
