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
const update_doc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let datas = Object.assign({}, req.body);
        datas.updateBy = req.username || '';
        const { doc_id } = req.params;
        console.log({ username: req.username });
        const doc = yield api_modle_schema_1.DB_doc.findOneAndUpdate({ doc_id }, datas, { new: true });
        if (doc) {
            res.status(201).send({
                message: ' update success',
                success: true,
                data: doc
            });
        }
        else {
            res.status(404).send({
                message: 'is not update!',
                success: false,
            });
        }
    }
    catch (error) {
        res.status(500).send({
            message: error.message,
            success: false,
        });
    }
});
exports.default = update_doc;
