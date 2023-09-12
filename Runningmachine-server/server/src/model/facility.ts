import { db } from "./db";

class FacilityService {
    async findUnique(company_id: number) {
        const queryResult = await db.facility.findUnique({
            where: {
                company_id,
            },
            select: {
                company_id: true,
                shower: true,
                locker: true,
                sweatsuit: true,
            },
        });

        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const facilityService = new FacilityService();