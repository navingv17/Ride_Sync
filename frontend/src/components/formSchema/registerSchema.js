import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name should contain minimum of 3 characters"),
  email: z.string().email("Not a valid email"),
  password: z.string().min(8, "Password should contain minimum of 8 characters")
});


