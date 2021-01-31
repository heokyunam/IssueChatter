export type Team = {
    uuid: string,
    text: string,
}

type InsertTeamAction = {
    type: "INSERT_TEAM",
    payload: string,
}

export type TeamAction = InsertTeamAction;

export type TeamsState = {
    teams: Team[]
}

const initialState: TeamsState = {
    teams: []
}

export const teamsReducer = (
    state: TeamsState = initialState,
    action: TeamAction
) => {
    return state;
}