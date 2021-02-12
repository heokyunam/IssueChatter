import {MdComment} from 'react-icons/md';
import {HiUserCircle} from 'react-icons/hi';
import {RiAddCircleLine} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Issue } from '../../../stores/Issues';

interface IssueParam {
    issue: Issue
}

const IssueElement = (param: IssueParam) => {
    const dispatch = useDispatch();

    const showEditPopup = () => {
        dispatch({
            type: "SET_ISSUE",
            payload: param.issue
        })
    }

    return (        
        <div className="issue" onClick={showEditPopup} key={param.issue.uuid}>
            <div className={"priority " + param.issue.priority}>{param.issue.priority} Priority</div>
            <div className="title">{param.issue.title}</div>
            <div className="bottom">
                <div className="comment">
                    <MdComment />
                    <div className="comment-num">2</div>
                </div>
                <div className="managers">
                    <RiAddCircleLine />
                    <HiUserCircle />
                </div>
            </div>
        </div>
    )
}

export default IssueElement;