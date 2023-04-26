import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'You must provide a user name'],
    validate: {
      validator: (name) => name.length > 2,
      message: 'Please enter a name of 3 character or more',
    },
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'You must provide a password'],
  },
});

const User = mongoose.model('user', UserSchema);

export default User;
