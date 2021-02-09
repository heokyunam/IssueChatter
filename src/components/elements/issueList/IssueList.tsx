import IssueElement from "./Issue";
import './IssueList.scss';
import {RiAddCircleLine} from 'react-icons/ri';
import { Issue } from "../../../stores/Issues";
import BlankIssue from "./BlankIssue";
import { useDispatch } from "react-redux";

interface IssueListParam {
    type: "Backlog" | "InProgress" | "Review" | "Complete",
    issues: Issue[]
}

const typeDict = {
    "Backlog": {className: "back-log"},
    "InProgress": {className: "in-progress"},
    "Review": {className: "review"},
    "Complete": {className: "complete"},
}

const IssueList = (param: IssueListParam) => {
    const topColorClass = typeDict[param.type].className;
    const dispatch = useDispatch();

    const showAddIssuePopup = () => {
        dispatch({
            type: "SHOW_ISSUE_EDIT_POPUP",
            payload: true
        })
    }

    return (
        <div className="issue-list">
            <div className={"top-color " + topColorClass}></div>
            <div className="title">{param.type}</div>
            {param.issues.map(value => (
                <IssueElement priority={value.priority} title={value.title}/>
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