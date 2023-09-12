import express from "express";
import { selectHours } from "../controller/hours";

const router = express.Router();

router.get("/:company_id", selectHours);

export default router;
