import { combineReducers } from 'redux';

import { JobsReducer } from './jobsReducer';

export const rootReducer = combineReducers({
    jobsReducer: JobsReducer
});

export type ApplicationReducer = ReturnType<typeof rootReducer>;
