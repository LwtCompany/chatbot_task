import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();


const app = express();
const port =process.env.SERVER_PORT || 3000;

import './config/database';

app.use(cors());

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
