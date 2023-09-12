import express from "express";
import { selectComment } from "../controller/comment";

const router = express.Router();

router.get("/:company_id", selectComment);

export default router;
