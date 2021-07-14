import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes';
import './config/database';

dotenv.config();

const app = express();
const port =process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/', router)

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
