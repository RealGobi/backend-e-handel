import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = Schema({
    userName: {
      type: String,
      unique: true,
      allowNull: false,
      required: true,
      lowercase: true,
      minlength: [5, 'Username must be longer then 5 character'],
      maxlength: [20, 'Username must NOT be this long!']
    },
    password: {
      type: String,
      allowNull: false,
      required: true
  }

});

const UserModel = mongoose.model('user', userSchema);
export default UserModel;