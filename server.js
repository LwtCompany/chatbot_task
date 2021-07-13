"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT || 3000;
require("./config/database");
app.use(cors_1.default());
app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});
