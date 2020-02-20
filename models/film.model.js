const mongoose = require("mongoose")
const Schema = mongoose.Schema

const filmSchema = new Schema({
    title: {type: String,required: true},
    poster: {type: String},
    year: {type: String,required: true},
    director: {type: String,required: true},
    actors: [{name:String}],
    genre: String,
    country: String,
    duration: String,
    argument: String,
    image: String,
    place: String,
    coords: {lat: Number,lng: Number},
    morePlaces:[{name:String,lat:String,lng:String}],
    suggestion: [{ type: mongoose.Schema.ObjectId, ref: 'Suggestion'}]
}, {
    timestamps: true
})

const Film = mongoose.model("Film", filmSchema)

module.exports = Film