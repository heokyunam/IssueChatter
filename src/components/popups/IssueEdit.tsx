import './IssueEdit.scss';
import TextEditor from '../atoms/TextEditor';
import {AiOutlineClose} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores';

const IssueEdit = () => {
    const issue = useSelector((state: RootState) => state.popup.issue);
    const dispatch = useDispatch();
    const closePopup = () => {
        dispatch({
            type: "SHOW_ISSUE_EDIT_POPUP",
            payload: false
        })
    }

    return (
        <div className="popup issue-edit">
            <div className="title">
                <div className="text">이슈 등록</div>
                <button className="btn-close" onClick={closePopup}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className="editor-area">
                <input type="text" className="title-edit" value={issue.title}/>
                <TextEditor />
            </div>
            <div className="button-area">
                <button className="btn-add">등록</button>
            </div>
        </div>
    )
}

export default IssueEdit;