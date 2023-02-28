import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Response } from "express";
import jwt from 'jsonwebtoken';
import { DB_users } from '../modal/api.modle.schema';

dotenv.config();
const privateKye: any = process.env.JWT_TOKEN_SEC;

const newToken = async (username: string) => {
    return jwt.sign({ username }, privateKye);

}
const SetSignIn = async (req: any, res: Response) => {
    try {
        const token = req.headers.Authorization;
        if (token && jwt.verify(token, privateKye)) {
            res.send({
                message: 'success',
                success: true,
                isLogdin: 'yes'
            })
        } else {
            const user: any = await DB_users.findOne({ username: req?.body?.username })
            bcrypt.compare(req?.body?.password, user?.password, async function (err, result) {
                // result == true
                if (result) {
                    console.log('success')
                    return res.send({
                        message: 'success',
                        success: true,
                        isLogdin: 'yes',
                        token: await newToken(req.body.username)
                    })
                } else {
                    console.log('false')
                    res.send({
                        message: 'invalid username or password',
                        success: false,
                        isLogdin: 'no'
                    })
                }
            });
        }
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send({
            message: 'server error',
            success: false,
            isLogdin: 'no'
        })
    }
}

export default SetSignIn
