import userModel from "../models/user.model.js";

export const deleteUser = async (req, res, next) => {
  const user = await userModel.findById(req.params.id)

  if (req.userId !== user._id.toString()) {
    return res.status(403).send("You can only delete your account")
  }
  await userModel.findByIdAndDelete(req.params.id);
  res.status(200).send("Account deleted");
}