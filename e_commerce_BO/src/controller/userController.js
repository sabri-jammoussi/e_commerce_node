import {
  createUsersService,
  getAllusersService,
  getUserByIdService,
  deleteUsersService,
  updateUsersService,
} from "../models/userModel.js";

// Standardized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};
export const createUser = async (req, res, next) => {
  const { email, user_password } = req.body;
  try {
    const newUser = await createUsersService(email, user_password);
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllusersService();
    handleResponse(res, 201, "User fetched successfully", users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User fetched successfully", user);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUsersService(req.params.id);
    if (!deletedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User deleted successfully", deleteUser);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { user_password, email } = req.body;
  try {
    const updatedUser = await updateUsersService(
      req.params.id,
      email,
      user_password
    );
    if (!updatedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User updated successfully", updatedUser);
  } catch (err) {
    next(err);
  }
};
