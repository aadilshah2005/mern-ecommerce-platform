import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello Adil shah");
});

app.use('/api/v1/auth', authRoutes);

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