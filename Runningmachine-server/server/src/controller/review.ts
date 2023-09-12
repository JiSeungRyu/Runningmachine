import { Request, Response } from "express";
import { reviewService } from "../model/review";

export async function selectReview(req: Request, res: Response) {
    try {
        const company_id: number = Number(req.params.company_id);
        const data = await reviewService.findUnique(company_id);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}