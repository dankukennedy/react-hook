import {z} from 'zod';
import { patterns } from '../../constants';

export const schema = z.object({
    name: z.string().min(1,{message: 'Name is required'}),
    email :z.string().min(1,{message: 'Email is required'})
    .refine((text)=> patterns.email.test(text),{
        message:'Email not valid',
    }
    ),
    states:z.array(z.string()).min(1).max(2,{message:"Only 2 states must be selected"}),
    languagesSpoken:z.array(z.string()),
    gender:z.string().min(1),
    skills:z.array(z.string()).max(3, {message:'you can only select 3 skills'}),
    registrationDateAndTime:z.date(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
    email:'',
    name:'',
    states:[],
    languagesSpoken:[],
    gender:'',
    skills:[],
    registrationDateAndTime: new Date(),
}