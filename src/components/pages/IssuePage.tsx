import IssueList from '../elements/issueList/IssueList';
import {FiChevronDown} from 'react-icons/fi';
import {HiUserCircle} from 'react-icons/hi';
import {RiAddCircleLine} from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';

const Issues = () => {
    const issues = useSelector((state: RootState) => state.issues.issues);

    const backlogs = issues.filter(value => value.state == "Backlog");
    const inprogress = issues.filter(value => value.state == "InProgress");
    const reviews = issues.filter(value => value.state == "Review");
    const completes = issues.filter(value => value.state == "Complete");

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
                <IssueList type="Backlog" issues={backlogs}/>
                <IssueList type="InProgress" issues={inprogress}/>
                <IssueList type="Review" issues={reviews}/>
                <IssueList type="Complete" issues={completes}/>
            </div>
        </div>
    )
}

export default Issues;