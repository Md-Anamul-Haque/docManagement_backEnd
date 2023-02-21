import mongoose from 'mongoose';
import config from './config';
const connectDatabase = async () => {
  try {
    if(config?.db?.url){
      await mongoose.connect(config.db.url);
      console.log("mongodb is connected");
  }else{
    console.log(`config.db.url is not ${config?.db?.url}`)
  }
  } catch (error:any) {
    console.log({ error });
    console.log({ errmessage: error.message })
    process.exit(1);
  }
};

export default connectDatabase
