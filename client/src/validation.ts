import { z } from 'zod';

export const bookSchema = z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    yearPublished: z.coerce
        .number()
        .min(1700, "Year must be after 1700s")
        .max(new Date().getFullYear(), "Year cannot be in the future"),
    genre: z.string().min(1, "Genre is required"),
});

export type BookFormValues = z.infer<typeof bookSchema>;
