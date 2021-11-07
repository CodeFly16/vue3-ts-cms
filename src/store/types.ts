import { ILoginState } from './login/types';

export interface IRootState {
  name: string;
  age: number;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}

export interface IRootWithModule {
  login: ILoginState;
}

export type IStoreType = IRootState & IRootWithModule;
