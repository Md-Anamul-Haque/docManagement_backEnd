import { Response } from 'express';
import { DB_doc } from '../../modal/api.modle.schema';
const delete_doc = async (req: any, res: Response) => {
  try {
    const { doc_id } = req.params;
    const doc: any = await DB_doc.findOneAndDelete({ doc_id });
    if (doc) {
      res.status(201).send({
        message: ' delete success',
        success: true,
        data: doc
      })
    } else {
      res.status(404).send({
        message: 'is not delete!',
        success: false,
      })
    }
  } catch (error: any) {
    res.status(500).send({
      message: error.message,
      success: false,
    })
  }
}

export default delete_doc
