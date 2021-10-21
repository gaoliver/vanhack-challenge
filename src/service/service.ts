import { RequesterMethodEnum, RequesterServiceModel } from '../utils/types';

interface Services {
    getJobSearch: RequesterServiceModel;
}

const services: Services = {
    getJobSearch: {
        method: RequesterMethodEnum.GET,
        endpoint: 'job?'
    }
};

export default services;
