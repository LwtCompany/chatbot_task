"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const router = express_1.default.Router();
const animal_model_1 = __importDefault(require("../models/animal.model"));
function http(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield node_fetch_1.default(request);
        const body = yield response.json();
        return body;
    });
}
router.post('/upload', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, color } = req.body;
        const response = yield http('https://random.dog/woof.json');
        if (response.url.includes(".mp4")) {
            return res.status(200).send({
                message: 'sorry returned video',
                status: false,
                data: {}
            });
        }
        console.log(response.url);
        const animal_data = animal_model_1.default.create({
            name: name,
            color: color,
            fileSizeBytes: response.fileSizeBytes,
            url: response.url
        });
        return res.status(200).send({
            message: 'success',
            status: true,
            data: animal_data
        });
    }
    catch (error) {
        return res.status(200).send({
            message: "error",
            status: false,
            data: error + ""
        });
    }
}));
router.get('/list', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.status(200).send({
            message: "error",
            status: false,
            data: error + ""
        });
    }
}));
module.exports = router;
