import { database } from "../../database/index.js";

export const getTeamByTeamIdService = async (teamId) => {
    try {
        const response = await database.query(
            `SELECT * FROM teams WHERE id = $1;`,
            [teamId]
        )
        return response.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}