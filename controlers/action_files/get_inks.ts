import { Response } from 'express';
import { DB_doc } from '../../modal/api.modle.schema';

const get_links = async (req: any, res: Response) => {
    try {
        const Links = await DB_doc.find({}, { doc_id: 1 })
        if (Links) {
            res.status(200).send({
                success: true,
                message: 'return Links',
                data: Links
            });
        } else {
            res.status(200).send({
                success: false,
                message: 'not found',
            });
        }

    } catch (error: any) {
        console.log(error)
        res.status(200).send({
            success: false,
            message: error.message
        });
    }
}

export default get_links
