import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import IssueEdit from "./IssueEdit";
import './index.scss';


const Popup = () => {
    const showIssueEdit = useSelector((state: RootState) => (state.issues.showEdit))

    return (
        <div className="popup-area">
            {
                showIssueEdit && (
                    <div className="modal"></div>
                )
            }
            {
                showIssueEdit && (
                    <IssueEdit />
                )
            }
        </div>
    )
}

export default Popup;