import { Schema, model, models } from 'mongoose';

//TODO finish this
const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  }
});

const User = models.User || model( 'User', UserSchema );

export default User;