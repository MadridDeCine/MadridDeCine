const mongoose = require("mongoose")
const Schema = mongoose.Schema

const filmSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: String,
    year: Number,
    director: String,
    actors: [],
    argument: String,
    place: String,
    coords: {
      lat: Number,
      lng: Number
  }
}, {
    timestamps: true
})

const Film = mongoose.model("Film", filmSchema)

module.exports = Film