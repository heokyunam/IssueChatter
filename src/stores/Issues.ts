export type Issue = {
    uuid: string,
    title: string,
    content: string,
    priority: "low" | "med" | "high"
    state: "Backlog" | "InProgress" | "Review" | "Complete"
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

export type IssuesState = {
    issues: Issue[]
}

const initialState: IssuesState = {
    issues: [{
        uuid: "5555",
        priority: "low",
        title: "연습하기",
        content: "연습하기",
        state: "Backlog"
    }, {
        uuid: "8888",
        priority: "med",
        title: "연습하기",
        content: "연습하기",
        state: "InProgress"
    }, {
        uuid: "6666",
        priority: "high",
        title: "연습하기",
        content: "연습하기",
        state: "Review"
    }, {
        uuid: "0000",
        priority: "low",
        title: "연습하기",
        content: "연습하기",
        state: "Complete"
    },
    ]
}

export const issuesReducer = (
    state: IssuesState = initialState,
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