export type Project = {
    uuid: string,
    text: string,
}

type InsertProjectAction = {
    type: "INSERT_PROJECT",
    payload: string
}

export type ProjectAction = InsertProjectAction;

export type ProjectsState = {
    projects: Project[]
}

const initialState: ProjectsState = {
    projects: []
}

export const projectsReducer = (
    state: ProjectsState = initialState,
    action: ProjectAction) => {
        return state;
}