import { db } from "./db";

class PriceService {
    async findUnique(company_id: number) {
        const queryResult = await db.price.findUnique({
            where: {
                company_id,
            },
            select: {
                company_id: true,
                month1: true,
                month3: true,
                month6: true,
                month12: true,
            },
        });

        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const priceService = new PriceService();