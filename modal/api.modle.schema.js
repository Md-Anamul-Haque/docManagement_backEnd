"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_users = exports.DB_doc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const doc = new mongoose_1.default.Schema({
    doc_id: {
        type: String,
        require: true,
        unique: true,
    },
    doc: {
        type: String,
    },
    createBy: {
        type: String,
    },
    updateBy: {
        type: String,
    },
}, { timestamps: true });
const users = new mongoose_1.default.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    createBy: {
        type: String,
    },
}, { timestamps: true });
exports.DB_doc = mongoose_1.default.model('doc', doc);
// export const DB_link = mongoose.model('link', links)
exports.DB_users = mongoose_1.default.model('user', users);
module.exports = { DB_doc: exports.DB_doc, DB_users: exports.DB_users };
