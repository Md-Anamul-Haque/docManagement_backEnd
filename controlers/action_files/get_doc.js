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
const get_doc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { doc_id } = req.params;
        console.log({ doc_id });
        const doc = yield api_modle_schema_1.DB_doc.findOne({ doc_id });
        console.log({ doc });
        if (doc) {
            res.status(200).send({
                success: true,
                message: 'return doc',
                data: doc
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
exports.default = get_doc;
