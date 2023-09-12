import { db } from "./db"

class ReviewService {
    async findUnique(company_id: number) {
        const queryResult = await db.review.findUnique({
            where: {
                company_id,
            },
            select: {
                company_id: true,
                review0: true,
                review1: true,
                review2: true,
                review3: true,
                review4: true,
                review5: true,
                review6: true,
                review7: true,
                review8: true,
                review9: true,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const reviewService = new ReviewService();