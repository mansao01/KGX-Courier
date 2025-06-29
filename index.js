import express from 'express';
import bodyParser from 'body-parser';

import { PrismaClient } from '/generated/prisma/client'

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.post("/input", async (req, res) => {
    const input = req.body;
    const result = await prisma.user.create({
        data: input
    });
    res.send(result);
})
app.get("/", () => console.log("Hello World"));

app.listen(8080, () => {
    console.log("Server start in port 8080");
})