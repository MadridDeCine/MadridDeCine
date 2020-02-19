const mongoose = require("mongoose")
const Schema = mongoose.Schema

const meetingSchema = new Schema({
    name: String,
    description: String,
    place: String,
    date: String,
    hour:String,
    path:String,
    user: [{ type: mongoose.Schema.ObjectId, ref: 'User'}]
}, {
    timestamps: true
})

const Meeting = mongoose.model("Meeting", meetingSchema)

module.exports = Meeting