import * as dotenv from 'dotenv';
import express  from 'express';
import cors from 'cors';
import db from '../models';
dotenv.config();


const app = express();
const port = process.env.NODE_PORT || 3000;
app.use(cors());
app.use(express.json());

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`fangeekbook Server is running on http://localhost:${port}`);
    })
});