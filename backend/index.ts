import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/prompt.route';

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
