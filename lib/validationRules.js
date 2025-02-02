export const validationRules = {
  username: {
    required: "Username is required",
  },
  email: {
    required: "Email address is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be 6 characters long",
    },
  },
};
