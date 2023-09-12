import { db } from "./db";

class ProgramService {
    async findUnique(company_id: number) {
        const queryResult = await db.program.findUnique({
            where: {
                company_id,
            },
            select: {
                company_id: true,
                pt: true,
                GX1: true,
                GX2: true,
                GX3: true,
            },
        });

        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const programService = new ProgramService();