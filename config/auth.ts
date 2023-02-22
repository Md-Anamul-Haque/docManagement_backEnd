import dotenv from 'dotenv';
import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
dotenv.config();
const auth = (req: any, res: Response, next: NextFunction) => {
    console.log(req.body)

    try {
        const privateKye: any = process.env.JWT_TOKEN_SEC
        const token = req.session.token;
        const decoded: any = jwt.verify(token, privateKye)
        req.username = decoded.username;
        console.log('success login')
        next()
    } catch (error) {
        console.log('faild login')
        res.send({
            success: false,
            isLogdin: 'no'
        })
    }
}
export default auth



// req.session.destroy(function (err: any) {
        //     // session updated
        // })

