const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters." })
    .max(255,{message:"Name must not be more than 255 characters"}),
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3,{message:"Email must be atleast of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be atleast of 10 digits" })
    .max(20,{message:"Phone must not be more than 20 digits"}),
    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(5, { message: "Password must be atleast of 5 characters." })
    .max(12,{message:"password must not be more than 12 characters"}),
});


module.exports=signupSchema;
