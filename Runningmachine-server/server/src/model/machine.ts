import { db } from "./db";

class MachineService {
    async findUnique(company_id: number) {
        const queryResult = await db.machine.findUnique({
            where: {
                company_id,
            },
            select: {
                company_id: true,
                machine0: true,
                machine1: true,
                machine2: true,
                machine3: true,
                machine4: true,
                machine5: true,
                machine6: true,
                machine7: true,
                machine8: true,
                machine9: true,
                machine10: true,
                machine11: true,
                machine12: true,
                machine13: true,
                machine14: true,
                machine15: true,
                machine16: true,
                machine17: true,
                machine18: true,
                machine19: true,
            },
        });

        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const machineService = new MachineService();