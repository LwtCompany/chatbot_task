"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const animal_router_1 = __importDefault(require("./animal.router"));
router.use('/animal', animal_router_1.default);
router.use('*', (req, res, next) => {
    return res.status(404)
        .send('Sorry page not found!  :(404');
});
module.exports = router;
