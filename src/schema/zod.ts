import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string({ required_error: "El correo electrónico es obligatorio" })
        .min(1, "El correo electrónico es obligatorio")
        .email("Correo electrónico inválido"),
    password: z
        .string({ required_error: "La contraseña es obligatoria" })
        .min(4, "La contraseña debe tener al menos 4 caracteres")
        .max(32, "La contraseña debe tener menos de 32 caracteres")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
            "La contraseña debe incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial"
        ),
});

export const registerSchema = z.object({
    username: z
        .string({ required_error: "El nombre de usuario es obligatorio" })
        .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
        .regex(/^[a-zA-Z0-9_]+$/, "El nombre de usuario solo puede contener letras, números y guiones bajos"),
    email: z
        .string({ required_error: "El correo electrónico es obligatorio" })
        .email("Debe ser un correo válido"),
    password: z
        .string({ required_error: "La contraseña es obligatoria" })
        .min(4, "La contraseña debe tener al menos 4 caracteres")
        .max(32, "La contraseña debe tener menos de 32 caracteres")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
            "La contraseña debe incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial"
        ),
});


export const contactoSchema = z.object({
    name: z
        .string({ required_error: "El nombre es obligatorio" })
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras y espacios"),
    email: z
        .string({ required_error: "El correo electrónico es obligatorio" })
        .email("Debe ser un correo electrónico válido"),
    message: z
        .string({ required_error: "El mensaje es obligatorio" })
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .max(500, "El mensaje no puede exceder los 500 caracteres"),
});

export const resetPasswordSchema = z.object({
    password: z.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .regex(/[A-Z]/, "La contraseña debe contener al menos una mayúscula")
        .regex(/[0-9]/, "La contraseña debe contener al menos un número"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
});

export const forgotPasswordSchema = z.object({
    email: z
        .string({ required_error: "El correo electrónico es obligatorio" })
        .min(5, { message: "El correo electrónico debe tener al menos 5 caracteres" }) // Asegura que el correo tenga una longitud mínima
        .email("Debe ser un correo electrónico válido") // Verifica que tenga formato de correo electrónico
        .max(100, { message: "El correo electrónico no puede tener más de 100 caracteres" }) // Limita la longitud máxima
});


export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ContactoForm = z.infer<typeof contactoSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;





