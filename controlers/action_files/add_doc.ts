import { Response } from 'express';
import { DB_doc } from '../../modal/api.modle.schema';
import update_doc from './update_doc';

const add_doc = async (req: any, res: Response) => {
  try {
    let datas: any = { ...req.body };
    datas.createBy = req.username || '';
    let { doc_id } = req.params;
    doc_id = doc_id.replace(/ /g, '_')
    doc_id = doc_id.replace(/\./g, '-')
    console.log({ doc_id })
    // if already have this document id --> update now
    // if (await DB_doc.findOneAndUpdate({ doc_id }, datas)) {
    //   console.log('updateing')
    //   return update_doc(req, res);
    // };
    if (await DB_doc.findOne({ doc_id })) {
      console.log('updateing')
      return update_doc(req, res);
    };

    // else create now 
    datas.doc_id = doc_id;
    const newDoc = new DB_doc({ ...datas });
    const doc = await newDoc.save();
    console.log({ doc_id })

    if (doc) {
      res.status(201).send({
        message: ' created success',
        success: true,
        data: doc
      })
    } else {
      res.status(200).send({
        message: 'is not create!',
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

export default add_doc
