import Joi from "joi";

const userScheme = Joi.object({
  email: Joi.string().email().required(),
  user_password: Joi.string().required(),
});

const validateUser = (req, res, next) => {
  const { error } = userScheme.validate(req.body);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  next();
};
export default validateUser;
