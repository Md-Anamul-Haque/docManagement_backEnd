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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        if ((_a = config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.db) === null || _a === void 0 ? void 0 : _a.url) {
            yield mongoose_1.default.connect(config_1.default.db.url);
            console.log("mongodb is connected");
        }
        else {
            console.log(`config.db.url is not ${(_b = config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.db) === null || _b === void 0 ? void 0 : _b.url}`);
        }
    }
    catch (error) {
        console.log({ error });
        console.log({ errmessage: error.message });
        process.exit(1);
    }
});
exports.default = connectDatabase;
