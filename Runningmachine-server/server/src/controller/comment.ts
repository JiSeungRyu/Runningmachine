import { Response, Request } from "express";
import { commentService } from "../model/comment";

export async function selectComment(req: Request, res: Response) {
    try {
        const company_id: number = Number(req.params.company_id);
        const data = await commentService.findUnique(company_id);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}