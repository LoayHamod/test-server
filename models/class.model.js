const mongoose = require("mongoose");

const Class = new mongoose.Schema({
    sclassName: {
        type: String,
        required: true,
    },
    // school: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'admin'
    // },
}, { timestamps: true });

module.exports = mongoose.model("class", Class);

