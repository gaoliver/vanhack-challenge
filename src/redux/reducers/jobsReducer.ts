import { IJobProps } from '../../utils/types';
import { JobsAction } from '../actions/jobsActions';

type JobsStateModel = {
    listJobs: Array<IJobProps>;
};

const initialState: JobsStateModel = {
    listJobs: []
};

export const JobsReducer = (
    state: JobsStateModel = initialState,
    action: JobsAction
) => {
    switch (action.type) {
        case 'ON_GET_LIST_JOBS':
            return {
                ...state,
                listJobs: action.payload
            };
        default:
            return state;
    }
};
