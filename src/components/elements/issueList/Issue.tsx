import {MdComment} from 'react-icons/md';
import {HiUserCircle} from 'react-icons/hi';
import {RiAddCircleLine} from 'react-icons/ri';

interface IssueParam {
    priority: string,
    title: string
}

const Issue = (param: IssueParam) => {
    return (        
        <div className="issue">
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