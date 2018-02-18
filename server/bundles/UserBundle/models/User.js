import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.statics.findByName = (searchPhrase, callback) =>
  this.findOne(
    {
      firsName: new RegExp(searchPhrase, 'i'),
      lastName: new RegExp(searchPhrase, 'i'),
    },
    callback,
  );

const User = mongoose.model('User', userSchema);

export default User;
