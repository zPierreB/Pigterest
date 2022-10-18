import dotenv from "dotenv";
dotenv.config();
import express from "express";
import seq from "./config/Database.js";
import cors from "cors";
import session from "express-session";

import pictureRoutes from "./routes/picture.routes.js";
import userRoutes from "./routes/user.routes.js";

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

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: parseInt(process.env.SESSION_MAX_AGE)
    }
}));

app.use((req, res, next) => {
    console.log(req.session);
    next();
})

app.use('/pictures', pictureRoutes);
app.use('/login', userRoutes);

app.listen(port, () => {
    console.log(`Server running at on port ${port}`)
});