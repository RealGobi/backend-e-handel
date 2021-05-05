import UserModel from '../models/UserModel.js';

const createUser = async (req, res) => {
  const user = new UserModel({
    userName: req.body.userName,
    password: req.body.password
  });

  try {
    const dbResponse = await user.save();
    res.status(201).send(dbResponse);
  } catch (error) {
    res.status(500).send({msg: error.message})
  }
};

export default { createUser }