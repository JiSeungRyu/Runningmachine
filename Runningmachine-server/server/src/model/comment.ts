import { db } from "./db";

class CommentService {
    async findUnique(company_id: number) {
        const queryResult = await db.comment.findUnique({
            where: {
                company_id,
            },
            select: {
                company_id: true,
                kind: true,
                tidy: true,
                various: true,
                wide: true,
                reasonable: true,
                pose: true,
                advice: true,
                parking: true,
                class: true,
                GX: true,
            },
        });

        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const commentService = new CommentService();