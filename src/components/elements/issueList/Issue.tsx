import {MdComment} from 'react-icons/md';
import {HiUserCircle} from 'react-icons/hi';
import {RiAddCircleLine} from 'react-icons/ri';
import { useDispatch } from 'react-redux';

interface IssueParam {
    priority: string,
    title: string
}

const Issue = (param: IssueParam) => {
    const dispatch = useDispatch();

    const showEditPopup = () => {
        dispatch({
            type: "UPDATE_ISSUE_EDIT_POPUP",
            payload: {
                title: param.title,
                content: ""
            }
        })
    }

    return (        
        <div className="issue" onClick={showEditPopup}>
            <div className={"priority " + param.priority}>{param.priority} Priority</div>
            <div className="title">{param.title}</div>
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

export default Issue;