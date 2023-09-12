import { Response, Request } from "express";
import { programService } from "../model/program";

export async function selectProgram(req: Request, res: Response) {
    try {
        const company_id: number = Number(req.params.company_id);
        const data = await programService.findUnique(company_id);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}