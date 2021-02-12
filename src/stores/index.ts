import { combineReducers } from 'redux';
import { issuesReducer, IssuesState } from './Issues';
import { chatsReducer, ChatsState } from './Chats';
import { roomsReducer, RoomsState } from './ChatRooms';
import { projectsReducer, ProjectsState } from './Projects';
import { teamsReducer, TeamsState } from './Teams';
import { loginUserReducer, LoginUserState } from './LoginUser';

const rootReducer = combineReducers({
    chats: chatsReducer,
    rooms: roomsReducer,
    issues: issuesReducer,
    projects: projectsReducer,
    teams: teamsReducer,
    login: loginUserReducer, 
})

export default rootReducer;

export type RootState = {
    chats: ChatsState,
    rooms: RoomsState,
    issues: IssuesState,
    projects: ProjectsState,
    teams: TeamsState,
    login: LoginUserState,
} ;