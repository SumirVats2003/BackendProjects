import express from "express";
import "../services/render.js";
import { addUser, homeRoute, updateUser } from "../services/render.js";

const router = express.Router();

router.get("/", homeRoute);
router.get("/add-user", addUser);
router.get("/update-user", updateUser);

export default router;
