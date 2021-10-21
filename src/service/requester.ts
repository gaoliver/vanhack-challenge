import axios, { AxiosRequestConfig } from 'axios';
import _ from 'lodash';

import { RequesterServiceModel } from '../utils/types';

const requester: any = async (service: RequesterServiceModel) => {
    const { endpoint, method } = service;
    const config: AxiosRequestConfig = {
        baseURL: 'https://api-interview.vanhack.com/v1/',
        url: endpoint
    };

    return axios.request(config).then((response) => response.data);
};

export default requester;
