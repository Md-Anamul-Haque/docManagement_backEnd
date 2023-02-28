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
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const api_modle_schema_1 = require("../modal/api.modle.schema");
dotenv_1.default.config();
const privateKye = process.env.JWT_TOKEN_SEC;
const newToken = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return jsonwebtoken_1.default.sign({ username }, privateKye);
});
const SetSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const token = req.headers.Authorization;
        if (token && jsonwebtoken_1.default.verify(token, privateKye)) {
            res.send({
                message: 'success',
                success: true,
                isLogdin: 'yes'
            });
        }
        else {
            const user = yield api_modle_schema_1.DB_users.findOne({ username: (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.username });
            bcrypt_1.default.compare((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.password, user === null || user === void 0 ? void 0 : user.password, function (err, result) {
                return __awaiter(this, void 0, void 0, function* () {
                    // result == true
                    if (result) {
                        console.log('success');
                        return res.send({
                            message: 'success',
                            success: true,
                            isLogdin: 'yes',
                            token: yield newToken(req.body.username)
                        });
                    }
                    else {
                        console.log('false');
                        res.send({
                            message: 'invalid username or password',
                            success: false,
                            isLogdin: 'no'
                        });
                    }
                });
            });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: 'server error',
            success: false,
            isLogdin: 'no'
        });
    }
});
exports.default = SetSignIn;
