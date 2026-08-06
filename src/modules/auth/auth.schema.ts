import { z } from 'zod';

export const RegisterUserSchema = z.object({
  body: z.object({
    firstName: z.string().min(2, 'FirstName is required.'),
    lastName: z.string().optional(),
    userName: z.string().min(1, 'Username is required.'),
    email: z.string().email('Valid email is required'),
    password: z.string().min(5, 'Password must be at least 5 characters long'),
  }),
});

export const loginUserSchema = z.object({
  body: z.object({
      email: z.string().email('Valid email is required.'),
      password: z.string().min(5, 'Password must be at least 5 characters long'),
  })
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken:z.string("RefreshToken is required")
  })
})
export type RegisterUserDTO = z.infer<typeof RegisterUserSchema>['body'];
export type LoginUserDTO = z.infer<typeof loginUserSchema>["body"]
export type RefreshTokenDTO = z.infer<typeof refreshTokenSchema>["body"]
