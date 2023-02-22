import dotenv from 'dotenv';
import { Response } from "express";

dotenv.config();

const getSignIn = async (req: any, res: Response) => {
    try {
        res.send({
            success: true,
            isLogdin: 'yes'
        });
    } catch (error) {
        res.send({
            success: false,
            isLogdin: 'no'
        })
    }
}

export default getSignIn
