import mongoose from 'mongoose';
const { Schema } = mongoose;


const animalSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        required: true
    },
    fileSizeBytes: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: { 
        type: Date,
        default: Date.now 
    },
});
const Animal = mongoose.model('Animal', animalSchema);
export = Animal;


