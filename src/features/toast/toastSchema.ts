import { z } from "zod";


export const toastSchema = z.object({
    msg: z.string().default('Welcome to nvim bridge'),
    logLevel: z.enum(['info', 'warning', 'error']).default('info')
});

export type Toast = z.infer<typeof toastSchema>;
