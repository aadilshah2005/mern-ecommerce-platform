import dotenv from 'dotenv'
dotenv.config();
import express from "express";

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Adil shah");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});