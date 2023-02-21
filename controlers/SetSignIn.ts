import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Response } from "express";
import jwt from 'jsonwebtoken';
import { DB_users } from '../modal/api.modle.schema';

dotenv.config();
const privateKye: any = process.env.JWT_TOKEN_SEC;

const newToken = async (username: string) => {
    return await jwt.sign({ username }, privateKye);

}
const SetSignIn = async (req: any, res: Response) => {
    try {
        console.log('start')
        if (req?.session?.token && jwt.verify(req?.session?.token, privateKye)) {
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
                    req.session.token = await newToken(req?.body?.username)
                    res.send({
                        message: 'success',
                        success: true,
                        isLogdin: 'yes'
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
