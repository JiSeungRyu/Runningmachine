import express from "express";
import { selectPrice } from "../controller/price";

const router = express.Router();

router.get("/:company_id", selectPrice);

export default router;
