import IssueElement from "./IssueElement";
import './IssueList.scss';
import {RiAddCircleLine} from 'react-icons/ri';
import { Issue } from "../../../stores/Issues";
import BlankIssue from "./BlankIssue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { useRef } from "react";
import useDrop from "../../atoms/useDrop";

interface IssueListParam {
    state: "Backlog" | "InProgress" | "Review" | "Complete"
}

const typeDict = {
    "Backlog": {className: "back-log"},
    "InProgress": {className: "in-progress"},
    "Review": {className: "review"},
    "Complete": {className: "complete"},
}

const IssueList = (param: IssueListParam) => {
    const issues = useSelector((state: RootState) => state.issues.issues.filter(value => value.state == param.state));
    const topColorClass = typeDict[param.state].className;
    const dispatch = useDispatch();
    const issueListRef = useRef(null);

    useDrop({
        ref: issueListRef,
        onDrop: (id:string) => {
            dispatch({
                type: "MOVE_ISSUE_STATE",
                payload: {
                    id: id,
                    state: param.state
                },
            })
        }
    });

    const showAddIssuePopup = () => {
        dispatch({
            type: "SHOW_ISSUE_EDIT",
            payload: true
        })

        dispatch({
            type: "SET_ISSUE_STATE",
            payload: param.state
        })
    }

    return (
        <div className="issue-list" ref={issueListRef}>
            <div className={"top-color " + topColorClass}></div>
            <div className="title">{param.state}</div>
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