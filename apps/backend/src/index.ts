import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "Hello world"
    });
});

app.listen(3000, () => {
    console.log('Backend running at port 3000');
});