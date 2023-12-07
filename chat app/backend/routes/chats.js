import express from "express";
import chatController from "../controllers/chatController.js";
const router = express.Router();

router.get("/getChats/:id", chatController.getAllChats);

export default router;