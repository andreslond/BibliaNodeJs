const mongoose = require('mongoose');
const { Schema } = mongoose;

const TechnologySchema = new Schema({
    name: { type: String, maxlenght: 50 },
    description: { type: String },
    logo: { type: String },
    tags: [{ type: String }]
},
    { timestamps: { creaedAt: true, updateAt: true } }
);

module.exports = mongoose.model("Thecnology", TechnologySchema);

