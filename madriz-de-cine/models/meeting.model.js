const mongoose = require("mongoose")
const Schema = mongoose.Schema

const meetingSchema = new Schema({
    name: String,
    description: String,
    place: String,
    user: [{ type: mongoose.Schema.ObjectId, ref: 'meeting'}]
}, {
    timestamps: true
})

const Meeting = mongoose.model("Meeting", meetingSchema)

module.exports = Meeting