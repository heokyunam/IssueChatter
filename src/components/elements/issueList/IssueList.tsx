import Issue from "./Issue";
import './IssueList.scss';

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
    const topColorClass = typeDict[param.type].className;

    return (
        <div className="issue-list">
            <div className={"top-color " + topColorClass}></div>
            <div className="title">{param.type}</div>
            <Issue priority="low" title="이슈 리스트 개발하기"/>
            <Issue priority="med" title="이슈 리스트 개발하기"/>
            <Issue priority="high" title="이슈 리스트 개발하기"/>
            <div className="add-issue">Add Issue</div>
        </div>
    )
}

export default IssueList;