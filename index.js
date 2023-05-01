import dotenv from 'dotenv';
import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import session from 'express-session';
import colors from 'colors';
import router from './server/index.js';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import initilizePassport from './server/passportConfig.js';
import MongoStore from 'connect-mongo';
import helmet from 'helmet';

const app = express();

dotenv.config();

const db = process.env.MONGODB_URI;
const port = process.env.PORT || 5555;

// const mongoStore = MongoStore.create({
//   mongoUrl: db,
//   ttl: 14 * 24 * 60 * 60, // session will expire in 14 days
// });

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(morgan('tiny'));
app.use(cors({ origin: '*', credentials: true }));
app.use(helmet());

app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
    // store: mongoStore,
  })
);

app.use(cookieParser('secretcode'));

app.use(passport.initialize());
app.use(passport.session());
initilizePassport(passport);

// app.use((req, res, next) => {
//   console.log('req.body'.green);
//   console.log(req.body);

//   next();
// });

app.use('/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(path.dirname('')), '/dist/index.html'));
  });
}

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MONGODB Connected'.yellow);
    app.listen(port, () => {
      console.log(`App listening on port ${port}`.blue);
    });
  })
  .catch((err) => console.log(err.message));
