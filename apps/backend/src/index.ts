import express, { Request, Response } from 'express';

const app = express();

import {signupObject} from "@repo/common/config";

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    const {firstname, lastname, email , password} = req.body
    const isValid = signupObject.safeParse(req.body)
    if(isValid){
        res.json({
            msg:`You have sent: ${firstname}`
        })
    }else{
        res.json({
            message: "only god knows"
        });
    }
   
});

app.listen(3000, () => {
    console.log('Backend running at port 3000');
});


//npx esbuild ./src/index.ts --bundle --platform=node --outfile=dist/index.js