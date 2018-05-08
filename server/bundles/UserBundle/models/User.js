import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';
import timestamps from 'mongoose-timestamp';

const UserSchema = new Schema({
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
    email: true,
  },
  password: {
    type: String,
    min: 6,
    bcrypt: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
    default: null,
  },
});

UserSchema.plugin(bcrypt);
UserSchema.plugin(timestamps);

const User = mongoose.model('User', UserSchema);

export default User;
