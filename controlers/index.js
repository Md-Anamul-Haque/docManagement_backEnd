"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetSignIn = exports.linksHandler = exports.DocHandler = void 0;
const add_doc_1 = __importDefault(require("./action_files/add_doc"));
const delete_doc_1 = __importDefault(require("./action_files/delete_doc"));
const get_doc_1 = __importDefault(require("./action_files/get_doc"));
const get_inks_1 = __importDefault(require("./action_files/get_inks"));
const update_doc_1 = __importDefault(require("./action_files/update_doc"));
const SetSignIn_1 = __importDefault(require("./SetSignIn"));
exports.SetSignIn = SetSignIn_1.default;
const DocHandler = {
    add: add_doc_1.default,
    get: get_doc_1.default,
    update: update_doc_1.default,
    delete: delete_doc_1.default
};
exports.DocHandler = DocHandler;
const linksHandler = {
    get: get_inks_1.default,
};
exports.linksHandler = linksHandler;
