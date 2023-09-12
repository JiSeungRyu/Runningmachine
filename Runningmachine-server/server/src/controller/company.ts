import { Response, Request } from "express";
import { companyService } from "../model/company";
import { distanceService } from "../service/distance";
import { companyDistanceBody } from "../types/interface";

export async function selectCompany(req: Request, res: Response) {
    try {
        const company_id: number = Number(req.params.company_id);
        const data = await companyService.findUnique(company_id);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function selectWard(req: Request, res: Response) {
    try {
        const ward: string = req.params.ward;
        const data = await companyService.findManyWard(ward);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function selectDistance(req: Request, res: Response) {
    try {
        const lat: number = Number(req.params.lat);
        const lng: number = Number(req.params.lng);
        let data: any = await companyService.findMany();
        for (let index in data) {
            const distance: number = distanceService.getDistanceFromLatLonInKm(lat, lng, Number(data[index].lat), Number(data[index].lng));
            data[index].distance = distance;
        }

        data.sort((data1: companyDistanceBody, data2: companyDistanceBody): number => {
            return data1.distance - data2.distance;
        });

        res.status(200).json(data);
    } catch (err: any) {
        console.log(err);
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}