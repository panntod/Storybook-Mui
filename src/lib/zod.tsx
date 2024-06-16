import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).max(50),
    age: z.number().positive(),
    email: z.string().email(),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }).min(8).max(50),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    }).email("Invalid email format"),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }).min(8, "Password must be at least 8 characters long")
        .max(50, "Password must be at most 50 characters long"),
});
