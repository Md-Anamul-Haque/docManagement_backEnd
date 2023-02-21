"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const auth_1 = __importDefault(require("./config/auth"));
const controlers_1 = require("./controlers");
const getSignIn_1 = __importDefault(require("./controlers/getSignIn"));
const app = (0, express_1.default)();
app.set('trust proxy', 1); // trust first proxy
app.use((0, express_session_1.default)({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
app.use((0, cors_1.default)());
app.get('/api/doc/:doc_id', controlers_1.DocHandler.get);
app.post('/api/doc/:doc_id', auth_1.default, controlers_1.DocHandler.add);
app.put('/api/doc/:doc_id', auth_1.default, controlers_1.DocHandler.update);
app.delete('/api/doc/:doc_id', auth_1.default, controlers_1.DocHandler.delete);
app.get('/api/links', auth_1.default, controlers_1.linksHandler.get);
app.get('/api/sign-in', getSignIn_1.default);
app.post('/api/sign-in', controlers_1.SetSignIn);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
// import bcrypt from 'bcrypt';
// import { DB_users } from './modal/api.modle.schema';
// const user = { username: 'Anamul-Nocrashsoft', password: 'ar.Nocrashsoft.password' }
// // const user = { username: 'Rokan-Nocrashsoft', password: 'ar.Nocrashsoft.password' }
// // const user = { username: 'a', password: 'a' }
// setTimeout(() => {
//     bcrypt.hash(user.password, 10, async function (err, hash) {
//         // Store hash in your password DB.
//         const p = new DB_users({ username: user.username, password: hash });
//         await p.save();
//         console.log('created new user')
//     });
// }, 200);
//---------------route not found error-----------------------
app.use((req, res, next) => {
    res.status(404).json({ message: "route not found" });
});
//-----------------server error----------------------
app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(500).json({ message: err.message, success: false });
    }
    else {
        res.send({
            message: '...',
            success: false
        });
    }
});
exports.default = app;
