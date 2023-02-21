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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const getSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('start');
        const privateKye = process.env.JWT_TOKEN_SEC;
        const token = req.session.token;
        const decoded = jsonwebtoken_1.default.verify(token, privateKye);
        if (decoded) {
            res.send({
                success: true,
                isLogdin: 'yes'
            });
        }
        else {
            res.send({
                success: false,
                isLogdin: 'no'
            });
        }
    }
    catch (error) {
        res.send({
            success: false,
            isLogdin: 'no'
        });
    }
});
exports.default = getSignIn;
