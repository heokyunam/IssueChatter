import { ContentState, EditorState } from "draft-js"

export const Priority = [
    "low", "med", "high"
]

export const State = [
    "Backlog", "InProgress", "Review", "Complete"
]

export type Issue = {
    uuid: string,
    title: string,
    content: EditorState,
    priority: "low" | "med" | "high",
    state: "Backlog" | "InProgress" | "Review" | "Complete",
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

type ShowIssueEditAction = {
    type: "SHOW_ISSUE_EDIT",
    payload: boolean
}

type SetIssueTitleAction = {
    type: "SET_ISSUE_TITLE",
    payload: string
}

type SetIssueContentAction = {
    type: "SET_ISSUE_CONTENT",
    payload: EditorState
}

type SetIssueStateAction = {
    type: "SET_ISSUE_STATE",
    payload: "Backlog" | "InProgress" | "Review" | "Complete"
}

type SetIssuePriorityAction = {
    type: "SET_ISSUE_PRIORITY",
    payload: "low" | "med" | "high"
}

type SetIssueAction = {
    type: "SET_ISSUE",
    payload: Issue
}

export type IssueAction = InsertIssueAction | UpdateIssueAction | DeleteIssueAction | LoadIssuesAction
    | ShowIssueEditAction | SetIssueTitleAction | SetIssueContentAction
    | SetIssueStateAction | SetIssuePriorityAction | SetIssueAction;

export type IssuesState = {
    issues: Issue[],
    showEdit: boolean,
    title: string,
    content: EditorState,
    priority: "low" | "med" | "high",
    state: "Backlog" | "InProgress" | "Review" | "Complete",
    uuid?: string,
}

const initialState: IssuesState = {
    issues: [{
        uuid: "5555",
        priority: "low",
        title: "연습하기",
        content: EditorState.createWithContent(ContentState.createFromText("연습하기")),
        state: "Backlog"
    }, {
        uuid: "8888",
        priority: "med",
        title: "연습하기",
        content: EditorState.createWithContent(ContentState.createFromText("연습하기")),
        state: "InProgress"
    }, {
        uuid: "6666",
        priority: "high",
        title: "연습하기",
        content: EditorState.createWithContent(ContentState.createFromText("연습하기")),
        state: "Review"
    }, {
        uuid: "0000",
        priority: "low",
        title: "연습하기",
        content: EditorState.createWithContent(ContentState.createFromText("연습하기")),
        state: "Complete"
    },
    ],
    showEdit: false,
    title: "",
    content: EditorState.createEmpty(),
    state: "Backlog",
    priority: "med",
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
            case "SHOW_ISSUE_EDIT":
                if(action.payload == true) {
                    return {...state, showEdit: action.payload};
                } else {
                    return {...state
                        , showEdit: action.payload
                        , title: initialState.title
                        , content: initialState.content
                        , uuid: initialState.uuid
                        , state: initialState.state
                        , priority: initialState.priority
                    };
                }
            case "SET_ISSUE_TITLE":
                return {...state, title: action.payload};
            case "SET_ISSUE_CONTENT":
                return {...state, content: action.payload};
            case "SET_ISSUE_STATE":
                return {...state, state: action.payload};
            case "SET_ISSUE_PRIORITY":
                return {...state, priority: action.payload};
            case "SET_ISSUE":
                return {...state
                    , showEdit: true
                    , uuid: action.payload.uuid
                    , title: action.payload.title
                    , content: action.payload.content
                    , state: action.payload.state
                    , priority: action.payload.priority
                }
            default:
                return state;
        }
}