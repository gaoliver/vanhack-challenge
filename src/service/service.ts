import { RequesterMethodEnum, RequesterServiceModel } from '../utils/types';

interface Services {
    getJobSearch(
      offset: number,
      limit: number
    ): RequesterServiceModel;
}

const services: Services = {
    getJobSearch(offset: number, limit: number) {
      return {
        method: RequesterMethodEnum.GET,
        endpoint: `job?skip=${offset}&maxResult=${limit}`,
      };
    },
};

export default services;
