import express from "express";
import { selectReview } from "../controller/review";

const router = express.Router();

router.get("/:company_id", selectReview);

export default router;