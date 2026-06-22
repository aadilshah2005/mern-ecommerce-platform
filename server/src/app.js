import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import connectDB from './config/db.js';

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Adil shah");
});


const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();