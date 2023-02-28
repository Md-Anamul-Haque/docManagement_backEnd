import cors from 'cors';
import express, { Express, NextFunction, Response } from 'express';
// import session from 'express-session';
import path from 'path';
import auth from './config/auth';
import { DocHandler, linksHandler, SetSignIn } from './controlers';
import getSignIn from './controlers/getSignIn';
const app: Express = express();
app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboardcat',
//     resave: false,
//     saveUninitialized: true,
// }))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use(cors());

app.get('/api/doc/:doc_id', DocHandler.get);
app.post('/api/doc/:doc_id', auth, DocHandler.add);
app.put('/api/doc/:doc_id', auth, DocHandler.update);
app.delete('/api/doc/:doc_id', auth, DocHandler.delete);

app.get('/api/links', linksHandler.get);



app.get('/api/sign-in', auth, getSignIn)
app.post('/api/sign-in', SetSignIn);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});




// import bcrypt from 'bcrypt';
// import { DB_users } from './modal/api.modle.schema';
// // const user = { username: 'Anamul-Nocrashsoft', password: 'ar.Nocrashsoft.password' }
// // const user = { username: 'Rokan-Nocrashsoft', password: 'ar.Nocrashsoft.password' }
// const user = { username: 'a', password: 'a' }
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
app.use((err: any, req: any, res: Response, next: NextFunction) => {
    if (err) {
        console.log(err);
        res.status(500).json({ message: err.message, success: false });

    } else {
        res.send({
            message: '...',
            success: false
        })
    }
});



export default app