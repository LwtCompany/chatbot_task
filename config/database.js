"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
dotenv_1.default.config();
mongoose_1.default.connect(`mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.rjp1f.mongodb.net/graphql?retryWrites=true&w=majority`, { useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose_1.default.connection.on('error', (err) => { console.log('err', err); });
mongoose_1.default.connection.on("connected", (err, res) => { console.log("mongoose is connected"); });
