const mongoose = require("mongoose")
const Schema = mongoose.Schema

const suggestionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    address: String,
    recommendation: String
}, {
    timestamps: true
})

const Suggestion = mongoose.model("Suggestion", suggestionSchema)

module.exports = Suggestion
