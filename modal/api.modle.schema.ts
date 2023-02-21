import mongoose from 'mongoose';
const doc = new mongoose.Schema({
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

const users = new mongoose.Schema({
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
export const DB_doc = mongoose.model('doc', doc)
// export const DB_link = mongoose.model('link', links)
export const DB_users = mongoose.model('user', users)


module.exports = { DB_doc, DB_users };

