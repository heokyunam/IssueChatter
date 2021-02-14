import { Todo } from "../../../stores/Issues";
import {BsTrash} from "react-icons/bs";
import {GrEdit} from "react-icons/gr";
import {ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im";
import {HiUserCircle} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { RootState } from "../../../stores";

interface TodoItemParam {
    todo: Todo
}

const TodoItem = (params: TodoItemParam) => {
    const loginUserId = useSelector((state: RootState) => state.login.loginUserId);
    const [isEditMode, setIsEditMode] = useState(false);
    let input = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    const checkTodo = () => {
        const changedState = (params.todo.state == "InProgress")? "Complete" : "InProgress";
        const completeUser = (params.todo.state == "InProgress")? undefined: loginUserId;

        dispatch({
            type: "SET_TODO_STATE",
            payload: {
                uuid: params.todo.uuid,
                state: changedState,
                user: completeUser,
            }
        })
    }

    const onEditTitle = async () => {
        // editMode state가 변경되기까지 대기
        await setIsEditMode(true);

        if(input.current != null) {
            input.current.focus();
        }
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {        
        dispatch({
            type: "SET_TODO_TITLE",
            payload: {
                uuid: params.todo.uuid,
                title: e.target.value
            }
        })
    }

    const deleteTodo = () => {
        if(window.confirm("삭제하시겠습니까?")) {
            dispatch({
                type: "DELETE_TODO",
                payload: {
                    uuid: params.todo.uuid
                }
            })
        }
    }

    const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key == "Enter") {
            setIsEditMode(false);
        }
    }

    return (        
        <div className={params.todo.state == "Complete"? "todo-item checked": "todo-item"} key={params.todo.uuid}>
            <div className="check-box" onClick={checkTodo}>
                {
                    params.todo.state == "InProgress"? 
                    <ImCheckboxUnchecked /> : <ImCheckboxChecked />
                }        
            </div>
            <div className="text">
                {
                    isEditMode? 
                    <input value={params.todo.title} onChange={onChangeTitle} 
                        onBlur={() => setIsEditMode(false)}
                        onKeyPress={onKeyPress}
                        ref={input}/>
                    : <span onClick={onEditTitle}>{params.todo.title}</span>
                 }
            </div>
            <div className="buttons">
                {
                    params.todo.state == "Complete" && (
                        <span className="button" title={params.todo.user}>
                            <HiUserCircle />
                        </span>
                    )
                }            
                <span className="button" onClick={deleteTodo}>
                    <BsTrash />
                </span>
                <span className="button" onClick={onEditTitle}>
                    <GrEdit />
                </span>
            </div>
        </div>
    )
}

export default TodoItem;