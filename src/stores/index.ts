import { combineReducers } from 'redux';
import { issuesReducer } from './Issues';
import { chatsReducer } from './Chats';
import { projectsReducer } from './Projects';
import { settingsReducer } from './Settings';
import { teamsReducer } from './Teams';

const rootReducer = combineReducers({
    chats: chatsReducer,
    issues: issuesReducer,
    projects: projectsReducer,
    settings: settingsReducer,
    teams: teamsReducer,
})

export default rootReducer;