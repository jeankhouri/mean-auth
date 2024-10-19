import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  //const hashedPassword = await bcryptjs.hash(password, 10);
  const hashedPassword = bcryptjs.hashSync(password, 10); //hashSync works asynchronously does not need await
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
