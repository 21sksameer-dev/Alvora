import mongoose from "mongoose";

const productdetailsModel = new mongoose.Schema({
    prod_id: String,
    prod_category: String,
    prod_price1: Number,
    prod_price2: Number,
    sub_category: String,
    prod_manufacturer: String,
    prod_name: String,
    prod_desc: String,
    prod_img: [String],
    prod_expirydate: Date,
    prod_mfd: Date,
    prod_status: String,
    sku: String,              // Stock Keeping Unit
    brand: String,
    model: String,
    tags: [String],
    slug: String,
    stock: Number,
    min_stock: Number,
    max_stock: Number,
    sold_quantity: Number,
    discount_price: Number,
    discount_percentage: Number,
    tax_percentage: Number,
    currency: {
        type: String,
        default: "INR"
    },
    variants: [{
        size: String,
        color: String,
        price: Number,
        stock: Number,
    }],
    specifications: [{
        key: String,
        value: String,
    }],
    weight: Number,          //shipping details
    length: Number, //shipping details
    width: Number, //shipping details
    height: Number, //shipping details
    shipping_charge: Number, //shipping details
    average_rating: {
        type: Number,
        default: 0
    },
    total_reviews: {
        type: Number,
        default: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    is_new_arrival: {
        type: Boolean,
        default: false
    },
    is_best_seller: {
        type: Boolean,
        default: false
    },
    meta_title: String,
    meta_description: String,
    meta_keywords: [String],
    created_by: String,
    updated_by: String,
}, {
    timestamps: true
});

export const Productdetails = mongoose.models.productdetails || mongoose.model("productdetails", productdetailsModel);