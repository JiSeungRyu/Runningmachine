import { Request, Response } from "express";
import { priceService } from "../model/price";

export async function selectPrice(req: Request, res: Response) {
    try {
        const company_id: number = Number(req.params.company_id);
        const data = await priceService.findUnique(company_id);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}