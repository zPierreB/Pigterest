import express from "express";

import { Login, getUsers } from "../controllers/Users.js";

const router = express();

router.get('/users', getUsers);
router.post('/', Login);

export default router;

