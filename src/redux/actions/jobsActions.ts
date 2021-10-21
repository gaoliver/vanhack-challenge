import { Dispatch } from 'react';
import { IJobProps } from '../../utils/types';

export interface GetListJobs {
    readonly type: 'ON_GET_LIST_JOBS';
    payload: Array<IJobProps>;
}

export interface ErrorActionJobs {
    readonly type: 'ON_JOBS_ERROR';
    payload: any;
}

export type JobsAction = GetListJobs | ErrorActionJobs;

export const getListJobs = (value: Array<IJobProps>) => {
    return async (dispatch: Dispatch<JobsAction>) => {
        try {
            dispatch({
                type: 'ON_GET_LIST_JOBS',
                payload: value
            });
        } catch (error) {
            dispatch({
                type: 'ON_JOBS_ERROR',
                payload: error
            });
        }
    };
};
