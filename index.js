import dotenv from 'dotenv';
import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import chalk from 'chalk';
import router from './server/index.js';
import path from 'path';
import colors from 'colors';

const app = express();

dotenv.config();

const port = process.env.PORT || 5555;

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(morgan('tiny'));
app.use(bodyparser.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.body);

  next();
});

app.listen(port, () => {
  console.log(chalk.bgBlueBright.black(`App listening on port ${port}`));
});

app.use('/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(path.dirname('')), '/dist/index.html'));
  });
}
