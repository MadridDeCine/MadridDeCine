const mongoose = require("mongoose")
const Schema = mongoose.Schema

const filmSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    poster: String,
    year: Number,
    director: String,
    actors: [{
        name:String
    }],
    argument: String,
    image: String,
    place: String,
    suggestion: [{ type: mongoose.Schema.ObjectId, ref: 'Suggestion'}],
    coords: {
      lat: Number,
      lng: Number
  }
}, {
    timestamps: true
})

const Film = mongoose.model("Film", filmSchema)

module.exports = Film