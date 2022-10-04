import express from "express";
const router = express.Router();

import { signin, signup, updateGames } from "../controllers/user.js";
import auth from "../middleware/auth.js";


router.post("/signin", signin);
router.post("/signup", signup);
router.patch('/user/:id', auth, updateGames);

export default router;