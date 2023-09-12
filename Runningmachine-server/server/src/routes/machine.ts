import express from "express";
import { selectMachine } from "../controller/machine";

const router = express.Router();

router.get("/:company_id", selectMachine);

export default router;
