import express from "express";
import { selectCompany, selectDistance, selectWard } from "../controller/company";

const router = express.Router();

router.get("/:company_id", selectCompany);
router.get("/ward/:ward", selectWard);
router.get("/distance/:lat/:lng", selectDistance);

export default router;
