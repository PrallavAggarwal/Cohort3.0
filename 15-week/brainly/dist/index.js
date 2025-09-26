import express from 'express';
const app = express();
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import z from 'zod';
import { userModel } from './db.js';
app.use(express.json());
app.post('/api/v1/signup', async (req, res) => {
    try {
        let firstname = req.body.firstname;
        let secondname = req.body.secondname;
        //validations
        if (!firstname || !secondname) {
            console.log();
            return res.status(400).json({
                success: false,
                message: " must provide both. "
            });
        }
        //zod validations
        const requiredBody = z.object({
            firstname: z.string().min(3).max(50),
            secondname: z.string().min(3).max(50)
        });
        let parsedData = requiredBody.safeParse({
            firstname: firstname,
            secondname: secondname
        });
        if (!parsedData.success) {
            console.log('wrong format as of zod.');
            return res.status(400).json({
                success: false,
                message: 'wrong format as of zod.'
            });
        }
        await userModel.create({
            firstname,
            secondname
        });
        console.log('signed up sucess');
        return res.status(500).json({
            success: true,
            message: "signed up success. "
        });
    }
    catch (error) {
        console.log('error whil signup : ', error);
        return res.status(400).json({
            success: false,
            message: " error while sign up "
        });
    }
});
app.post('/api/v1/signin', (req, res) => {
});
app.post('/api/v1/content', (req, res) => {
});
app.post('/api/v1/', (req, res) => {
});
//# sourceMappingURL=index.js.map