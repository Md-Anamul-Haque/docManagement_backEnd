import { Response } from 'express';
import { DB_doc } from '../../modal/api.modle.schema';

const update_doc = async (req: any, res: Response) => {
  try {
    let datas: any = { ...req.body };
    datas.updateBy = req.username || '';
    const { doc_id } = req.params;
    console.log({ username: req.username })
    const doc: any = await DB_doc.findOneAndUpdate({ doc_id }, datas, { new: true });
    if (doc) {
      res.status(201).send({
        message: ' update success',
        success: true,
        data: doc
      })
    } else {
      res.status(404).send({
        message: 'is not update!',
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

export default update_doc
