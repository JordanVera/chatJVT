import app from './server.js';
import mongoose from 'mongoose';

const db = process.env.MONGODB_URI;
const port = process.env.PORT || 5555;

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
