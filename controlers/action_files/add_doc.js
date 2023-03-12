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
const api_modle_schema_1 = require("../../modal/api.modle.schema");
const update_doc_1 = __importDefault(require("./update_doc"));
const add_doc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let datas = Object.assign({}, req.body);
        datas.createBy = req.username || '';
        let { doc_id } = req.params;
        doc_id = doc_id.replace(/\ /g, '_');
        doc_id = doc_id.replace(/\./g, '-');
        console.log({ doc_id });
        // // if already have this document id --> update now
        // if (await DB_doc.findOneAndUpdate({ doc_id }, datas)) {
        //   console.log('updateing')
        //   return update_doc(req, res);
        // };
        if (yield api_modle_schema_1.DB_doc.findOne({ doc_id })) {
            console.log('updateing');
            return (0, update_doc_1.default)(req, res);
        }
        ;
        // else create now 
        datas.doc_id = doc_id;
        const newDoc = new api_modle_schema_1.DB_doc(Object.assign({}, datas));
        const doc = yield newDoc.save();
        console.log({ doc_id });
        if (doc) {
            res.status(201).send({
                message: ' created success',
                success: true,
                data: doc
            });
        }
        else {
            res.status(200).send({
                message: 'is not create!',
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
exports.default = add_doc;
