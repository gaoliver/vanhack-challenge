import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

export enum RequesterMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export type RequesterServiceModel = {
  method: RequesterMethodEnum;
  endpoint: string;
};

export type RequestResultModel = {
  result: {
    items: Array<IJobProps>;
    pageSize: number;
    pageSkip: number;
    totalCount: number;
    totalPages: number;
    pageNumber: number;
    hasPrevious: boolean;
    hasNext: boolean;
  };
  targetUrl: any;
  success: boolean;
  error: any;
  unAuthorizedRequest: boolean;
  __abp: boolean;
};

export type IJobProps = {
  id: number;
  createdAt: string;
  numberOfPositions: number;
  companyName: string;
  title: string;
  area: string;
  description: string;
  skills: string;
  slug: string;
  totalHires: number;
  flagCode: string;
  location: string;
  relocate: string;
  salaryFrom: number;
  salaryTo: number;
  currency: string;
  jobType: string;
  canApply: boolean;
};

export type NavigationProp = StackNavigationProp<StackParamList, 'Home'>;
export type NavigationParamsProp = NativeStackScreenProps<StackParamList, 'JobDetail'>;

export type StackParamList = {
  Home: undefined;
  JobDetail: { jobId: number };
};
