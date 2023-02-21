// import dotenv from 'dotenv';
import app from './app';
import config from './config/config';
import connectDatabase from './config/db';
// dotenv.config();

const PORT = config.app.port;


app.listen(PORT, async () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}
                db connecting wait...`);
    await connectDatabase()

});