export type Issue = {
    uuid: string,
    title: string,
    content: string,
}

type InsertIssueAction = {
    type: "INSERT_ISSUE",
    payload: Issue
}

type UpdateIssueAction = {
    type: "UPDATE_ISSUE",
    payload: Issue
}

type DeleteIssueAction = {
    type: "DELETE_ISSUE",
    payload: string //uuid
}

type LoadIssuesAction = {
    type: "LOAD_ISSUES",
    payload: Issue[]
}

export type IssueAction = InsertIssueAction | UpdateIssueAction | DeleteIssueAction | LoadIssuesAction

type IssueState = {
    issues: Issue[]
}

const initialState: IssueState = {
    issues: []
}

export const issuesReducer = (
    state: IssueState = initialState,
    action: IssueAction
    ) => {
        switch(action.type) {
            case "INSERT_ISSUE":
                return {...state, issues: [...state.issues, action.payload]};
            case "UPDATE_ISSUE":
                var deleted = state.issues.filter(value => value.uuid != action.payload.uuid);
                return {...state, issues: [...deleted, action.payload]};
            case "DELETE_ISSUE":
                var deleted = state.issues.filter(value => value.uuid != action.payload);
                return {...state, issues: deleted}
            case "LOAD_ISSUES":
                return {...state, issues: action.payload};
            default:
                return state;
        }
}