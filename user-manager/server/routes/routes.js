import express from "express";
import "../services/render.js";
import { addUser, homeRoute, updateUser } from "../services/render.js";
import { create, find, update, del } from "../controller/controller.js";

const router = express.Router();

router.get("/", homeRoute);
router.get("/add-user", addUser);
router.get("/update-user", updateUser);

// API
router.post("/api/users", create);
router.get("/api/users", find);
router.put("/api/users/:id", update);
router.delete("/api/users/:id", del);

export default router;
