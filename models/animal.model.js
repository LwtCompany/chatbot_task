"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
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
const Animal = mongoose_1.default.model('Animal', animalSchema);
exports.Animal = Animal;
