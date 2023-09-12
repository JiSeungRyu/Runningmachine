import express from "express";
import { selectFacility } from "../controller/facility";

const router = express.Router();

router.get("/:company_id", selectFacility);

export default router;
