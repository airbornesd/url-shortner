import express from 'express';
import cors from 'cors';
import { connectDB } from './config.js';
import routes from './src/routes/url.js';
import dotenv from 'dotenv'

dotenv.config({ path: './.env' });

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ err });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
