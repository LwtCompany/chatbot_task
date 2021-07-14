"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
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
const Animal = mongoose_1.default.model('Animal', animalSchema);
module.exports = Animal;
