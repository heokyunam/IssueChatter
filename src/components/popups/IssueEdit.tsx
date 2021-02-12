import './IssueEdit.scss';
import TextEditor from '../atoms/TextEditor';
import {AiOutlineClose} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores';
import { EditorState } from 'draft-js';
import { Priority, State } from '../../stores/Issues';
import { useEffect } from 'react';
import { v4 } from 'uuid';
import { EMPTY_TITLE } from '../../lang';

const IssueEdit = () => {
    const issues = useSelector((state: RootState) => state.issues);
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch({
            type: "SHOW_ISSUE_EDIT",
            payload: false
        })
    }

    const setTitle = (title: string) => {
        dispatch({
            type: "SET_ISSUE_TITLE",
            payload: title
        })
    }

    const setEditorState = (editorState: EditorState) => {
        dispatch({
            type: "SET_ISSUE_CONTENT",
            payload: editorState
        })
    }

    const setIssueState = (state: string) => {
        dispatch({
            type: "SET_ISSUE_STATE",
            payload: state
        })
    }

    const setIssuePriority = (priority: string) => {
        dispatch({
            type: "SET_ISSUE_PRIORITY",
            payload: priority
        })
    }

    const addIssue = () => {
        if(issues.title != "") {
            if(issues.uuid == undefined) {
                dispatch({
                    type: "INSERT_ISSUE",
                    payload: {
                        uuid: v4(),
                        title: issues.title,
                        content: issues.content,
                        priority: issues.priority,
                        state: issues.state,
                    }
                })
            } else {
                dispatch({
                    type: "UPDATE_ISSUE",
                    payload: {
                        uuid: issues.uuid,
                        title: issues.title,
                        content: issues.content,
                        priority: issues.priority,
                        state: issues.state,
                    }
                })
            }

            closePopup();
        } else {
            alert(EMPTY_TITLE);
        }
    }

    return (
        <div className="popup issue-edit">
            <div className="title">
                <div className="text">이슈 등록</div>
                <button className="btn-close" onClick={closePopup}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className="edit-area">
                <div className="option-area">
                    <div className="option priority">
                        <span className="text">Priority</span>
                        <select name="priority" value={issues.priority} onChange={e=>setIssuePriority(e.target.value)}>
                            {
                                Priority.map(value => (
                                    <option value={value}>{value}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="option state">
                        <span className="text">State</span>
                        <select name="state" value={issues.state} onChange={e=>setIssueState(e.target.value)}>
                            {
                                State.map(value => (
                                    <option value={value}>{value}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="editor-area">
                    <div className="title-edit">
                        <span className="text">제목</span>
                        <input type="text" value={issues.title} onChange={e=>setTitle(e.target.value)}/>
                    </div>
                    <TextEditor editorState={issues.content} setEditorState={setEditorState}/>
                </div>
            </div>  
            <div className="button-area">
                <button className="btn-add" onClick={addIssue}>
                    {
                        issues.uuid == undefined? "등록" : "수정"
                    }
                </button>
            </div>          
        </div>
    )
}

export default IssueEdit;