import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email('The email is required'),
  password: z
    .string()
    .min(6, 'The password should have at least 6 characters')
    .max(15, 'The password should not have more than 15 characters'),
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/,
  //   'Must contain uppercase, lowercase, and number.'
  // ),
});

export type loginFormSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  firstname: z.string().min(1, 'The firstname is required'),
  lastname: z.string().min(1, 'The lastname is required'),
  profession: z.string().min(1, 'The profession is required'),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  email: z.email('The email is required'),
  password: z
    .string()
    .min(6, 'The password should have at least 6 characters')
    .max(15, 'The password should not have more than 15 characters'),
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/,
  //   'Must contain uppercase, lowercase, and number.'
  // ),
});
export type registerFormSchema = z.infer<typeof registerSchema>;
