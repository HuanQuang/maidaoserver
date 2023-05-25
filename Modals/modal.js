import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    address: {
        type: String,
        require:true
    },
    tel: {
        type: String,
        require:true
    },
    email: {
        type: String,
    },
    quantity: {
        type: String
    },
    productName: {
        type: String,
        require: true
    },
    pay: {
        type: String,
        require: true
    },
    note: {
        type: String
    },
    total: {
        type: String,
    }
},{
    timestamps: true
}
)
const order = mongoose.model('order', schema)
export default order