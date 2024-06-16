import { z, ZodString, ZodNumber, ZodType } from "zod";

// Function to create a reusable string field schema
const createStringField = (
    fieldName: string,
    minLength = 0,
    maxLength = Infinity,
    requiredError = `${fieldName} is required`,
    invalidTypeError = `${fieldName} must be a string`
): ZodString => {
    return z
        .string({
            required_error: requiredError,
            invalid_type_error: invalidTypeError,
        })
        .min(minLength, `${fieldName} must be at least ${minLength} characters long`)
        .max(maxLength, `${fieldName} must be at most ${maxLength} characters long`);
};

// Function to create a reusable email field schema
const createEmailField = (
    requiredError = "Email is required",
    invalidTypeError = "Email must be a string"
): ZodString => {
    return z
        .string({
            required_error: requiredError,
            invalid_type_error: invalidTypeError,
        })
        .email("Invalid email format");
};

// Function to create a reusable number field schema
const createNumberField = (
    positive = true,
    requiredError = "Number is required",
    invalidTypeError = "Number must be a number"
): ZodNumber => {
    let numberSchema = z.number({
        required_error: requiredError,
        invalid_type_error: invalidTypeError,
    });
    return positive ? numberSchema.positive("Number must be positive") : numberSchema;
};

// Function to create user schema
const createUserSchema = (): ZodType<any> => {
    return z
        .object({
            id: createStringField("ID"),
            name: createStringField("Name", 0, 50),
            age: createNumberField(),
            email: createEmailField(),
            password: createStringField("Password", 8, 50),
            confirmPassword: createStringField("Confirm Password", 8, 50),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        });
};

// Function to create login schema
const createLoginSchema = (): ZodType<any> => {
    return z.object({
        email: createEmailField(),
        password: createStringField("Password", 8, 50),
    });
};

// Example usage
const userSchema = createUserSchema();
const loginSchema = createLoginSchema();

export { createUserSchema, createLoginSchema, userSchema, loginSchema };
