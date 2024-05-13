import {z} from "zod";
export const BACKEND_URL:string = "https://google.com"

export const signupObject = z.object({
    firstname:z.string().min(4).max(30),
    lastname:z.string().min(4).max(30),
    email:z.string().email(),
    password:z.string().min(8)
})