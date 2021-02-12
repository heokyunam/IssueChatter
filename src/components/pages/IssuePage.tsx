import IssueList from '../elements/issueList/IssueList';
import {FiChevronDown} from 'react-icons/fi';
import {HiUserCircle} from 'react-icons/hi';
import {RiAddCircleLine} from 'react-icons/ri';

const IssuePage = () => {
    return (
        <div className="issue-page">
            <div className="top-area">
                <div className="project-select">
                    <div className="title">
                        Studio Board
                    </div>
                    <span className="down-icon">
                        <FiChevronDown className="down-icon"/>
                    </span>
                </div>
                <div className="managers">
                    <RiAddCircleLine />
                    <HiUserCircle />
                    <HiUserCircle />
                    <HiUserCircle />
                </div>
            </div>
            <div className="kanban">
                <IssueList type="Backlog"/>
                <IssueList type="InProgress"/>
                <IssueList type="Review"/>
                <IssueList type="Complete"/>
            </div>
        </div>
    )
}

export default IssuePage;