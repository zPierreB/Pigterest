import dotenv from "dotenv";
dotenv.config();
import express from "express";
import sequelize from "./config/db.js";
import cors from "cors";

const app = express();

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch(error) {
    console.error('Unable to connect to the database: ', error);
}

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running at on port ${port}`)
});