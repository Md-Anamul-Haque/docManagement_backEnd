import { Response } from 'express';
import { DB_doc } from '../../modal/api.modle.schema';

const get_doc = async (req: any, res: Response) => {
  try {
    const { doc_id } = req.params;
    console.log({ doc_id })
    const doc = await DB_doc.findOne({ doc_id })
    console.log({ doc })
    if (doc) {
      res.status(200).send({
        success: true,
        message: 'return doc',
        data: doc
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

export default get_doc
