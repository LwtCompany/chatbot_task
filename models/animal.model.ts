import mongoose from 'mongoose';
const { Schema } = mongoose;

const opts = {
    created_at: { 
        currentTime: () => Math.floor(Date.now() / 1000)
    },
  };

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
    opts
});
const Animal = mongoose.model('Animal', animalSchema);
export {Animal};