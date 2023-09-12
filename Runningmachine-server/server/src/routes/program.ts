import express from "express";
import { selectProgram } from "../controller/program";

const router = express.Router();

router.get("/:company_id", selectProgram);

export default router;