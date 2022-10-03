import dotenv from "dotenv";
dotenv.config();
import express from "express";
import seq from "./config/db.js";
import pictureRoutes from "./routes/picture.routes.js";
import cors from "cors";

const app = express();

try {
    await seq.authenticate();
    console.log('Connection has been established successfully.');
} catch(error) {
    console.error('Unable to connect to the database: ', error);
}

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/pictures', pictureRoutes);

app.listen(port, () => {
    console.log(`Server running at on port ${port}`)
});