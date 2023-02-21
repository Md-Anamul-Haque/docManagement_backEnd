import dotenv from 'dotenv';
import { Response } from "express";
import jwt from 'jsonwebtoken';

dotenv.config();

const getSignIn = async (req: any, res: Response) => {
    try {
        console.log('start')
        const privateKye: any = process.env.JWT_TOKEN_SEC;
        const token = req.session.token;
        const decoded = jwt.verify(token, privateKye);

        if (decoded) {
            res.send({
                success: true,
                isLogdin: 'yes'
            });
        } else {
            res.send({
                success: false,
                isLogdin: 'no'
            })
        }

    } catch (error) {
        res.send({
            success: false,
            isLogdin: 'no'
        })
    }
}

export default getSignIn
