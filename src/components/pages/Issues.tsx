import IssueList from '../elements/issueList/IssueList';

const Issues = () => {
    return (
        <div className="issue-page">
            <IssueList type="Backlog"/>
            <IssueList type="InProgress"/>
            <IssueList type="Review"/>
            <IssueList type="Complete"/>
        </div>
    )
}

export default Issues;