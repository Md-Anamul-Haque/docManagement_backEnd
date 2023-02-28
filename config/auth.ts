import dotenv from 'dotenv';
import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
const requestIp = require('request-ip');
dotenv.config();
const auth = (req: any, res: Response, next: NextFunction) => {
    try {
        const clientIp = requestIp.getClientIp(req);
        console.log('ip is ' + clientIp)
        const privateKye: any = process.env.JWT_TOKEN_SEC
        // const token = req.session.token;
        const token = req.headers.authorization;
        const decoded: any = jwt.verify(token, privateKye)
        req.username = decoded.username;
        next()
    } catch (error) {
        console.log({ error })
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

