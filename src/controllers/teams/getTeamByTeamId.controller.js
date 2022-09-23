import { getTeamByTeamIdService } from "../../services/teams/getTeamByTeamId.service.js";

export const getTeamByTeamIdController = async (request, response) => {
    try {
        const id = request.params.id
        const team = await getTeamByTeamIdService(id)
        return response.status(200).json(team)
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
}