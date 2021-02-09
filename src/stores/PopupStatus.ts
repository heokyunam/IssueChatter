import { ProjectsState } from "./Projects"

export type IssueEditorData = {
    title: string;
    content: string;
}

export type PopupState = {
    showIssueEdit: boolean;
    issue: IssueEditorData;
}

type ShowIssuePopupAction = {
    type: "SHOW_ISSUE_EDIT_POPUP",
    payload: boolean
}

type ShowUpdateIssuePopupAction = {
    type: "UPDATE_ISSUE_EDIT_POPUP",
    payload: IssueEditorData
}

export type PopupAction = ShowIssuePopupAction | ShowUpdateIssuePopupAction;

const initialState: PopupState = {
    showIssueEdit: false,
    issue: {
        title: "",
        content: "",
    }
}

export const popupReducer = (
    state: PopupState = initialState,
    action: PopupAction
) => {
    switch(action.type) {
        case "SHOW_ISSUE_EDIT_POPUP":
            return {...state, showIssueEdit: action.payload, issue: {title: "", content: ""}};
        case "UPDATE_ISSUE_EDIT_POPUP":
            return {...state, showIssueEdit: true, issue: action.payload};
        
        default:
            return state;
    }
}