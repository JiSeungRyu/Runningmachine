import { db } from "./db";

class HoursService {
    async findUnique(company_id: number) {
        const queryResult = await db.hours.findUnique({
            where: {
                company_id,
            },
            select: {
                company_id: true,
                mon_open: true,
                mon_close: true,
                tue_open: true,
                tue_close: true,
                wed_open: true,
                wed_close: true,
                thu_open: true,
                thu_close: true,
                fri_open: true,
                fri_close: true,
                sat_open: true,
                sat_close: true,
                sun_open: true,
                sun_close: true,
            },
        });

        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const hoursService = new HoursService();