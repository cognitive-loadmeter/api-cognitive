import { Router } from "express";
import { createTeamController } from "../controllers/teams/createTeam.controller.js";
import { getTeamByTeamIdController } from "../controllers/teams/getTeamByTeamId.controller.js";
import { listTeamByUserIdController } from "../controllers/teams/listTeamByUserId.controller.js";
import { authUserMiddleware } from "../middlewares/authUser.middleware.js"

const teams = Router()

teams.post("", authUserMiddleware, createTeamController)
teams.get("/:id", listTeamByUserIdController)
teams.get("/search/:id", getTeamByTeamIdController)

export default teams