import bcrypt from 'bcrypt';
import User from './models/User.js';
import passport from 'passport';

const register = async (req, res) => {
  try {
    const doc = await User.findOne({ username: req.body.username });

    if (doc) {
      const response = { msg: 'User already exists' };
      console.log(response);
      return await res.status(403).json(response);
    }
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });

      await newUser.save();
      const response = { msg: 'User Created' };
      console.log(response);
      return res.json(response);
    }
  } catch (error) {
    res.json({ msg: error });
    throw error;
  }
};

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) {
      return res.status(403).json({ msg: 'no user exists' });
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        const msg = { msg: 'User logged in succesfull' };
        console.log(msg);
        console.log(user);
        return res.status(200).json(msg);
      });
    }
  })(req, res, next);
};

const getMe = (req, res) => {
  console.log(req.isAuthenticated());
  console.log(req.user);
  return res.status(200).json({ user: req.user });
};

export { register, login, getMe };
