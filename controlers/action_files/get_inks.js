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
Object.defineProperty(exports, "__esModule", { value: true });
const api_modle_schema_1 = require("../../modal/api.modle.schema");
const get_links = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Links = yield api_modle_schema_1.DB_doc.find({}, { doc_id: 1 });
        if (Links) {
            res.status(200).send({
                success: true,
                message: 'return Links',
                data: Links
            });
        }
        else {
            res.status(200).send({
                success: false,
                message: 'not found',
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(200).send({
            success: false,
            message: error.message
        });
    }
});
exports.default = get_links;
