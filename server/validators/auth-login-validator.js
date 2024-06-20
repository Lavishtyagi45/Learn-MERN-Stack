const {z}=require("zod");

const loginSchema=z.object({
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email or password" })
    .min(3,{message:"Invalid email or password"})
    .max(255,{message:"Invalid email or password"}),
    password: z
      .string({ required_error: "Password is required" })
      .trim()
      .min(5, { message: "Invalid email or password" })
      .max(12,{message:"Invalid email or password"}),
  });

  module.exports=loginSchema;
  