import IssueElement from "./IssueElement";
import './IssueList.scss';
import {RiAddCircleLine} from 'react-icons/ri';
import { Issue } from "../../../stores/Issues";
import BlankIssue from "./BlankIssue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores";

interface IssueListParam {
    type: "Backlog" | "InProgress" | "Review" | "Complete"
}

const typeDict = {
    "Backlog": {className: "back-log"},
    "InProgress": {className: "in-progress"},
    "Review": {className: "review"},
    "Complete": {className: "complete"},
}

const IssueList = (param: IssueListParam) => {
    const issues = useSelector((state: RootState) => state.issues.issues.filter(value => value.state == param.type));
    const topColorClass = typeDict[param.type].className;
    const dispatch = useDispatch();

    const showAddIssuePopup = () => {
        dispatch({
            type: "SHOW_ISSUE_EDIT",
            payload: true
        })

        dispatch({
            type: "SET_ISSUE_STATE",
            payload: param.type
        })
    }

    return (
        <div className="issue-list">
            <div className={"top-color " + topColorClass}></div>
            <div className="title">{param.type}</div>
            {issues.map(value => (
                <IssueElement issue={value}/>
            ))}
            <BlankIssue />
            <div className="add-issue" onClick={showAddIssuePopup}>
                <div className="text">Add Issue</div>
                <div className="add-icon">
                    <RiAddCircleLine />
                </div>
            </div>
        </div>
    )
}

export default IssueList;