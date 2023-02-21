"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const auth = (req, res, next) => {
    console.log(req.body);
    try {
        const privateKye = process.env.JWT_TOKEN_SEC;
        const token = req.session.token;
        const decoded = jsonwebtoken_1.default.verify(token, privateKye);
        req.username = decoded.username;
        next();
    }
    catch (error) {
        res.send({
            success: false,
            isLogdin: 'no'
        });
    }
};
exports.default = auth;
// req.session.destroy(function (err: any) {
//     // session updated
// })
