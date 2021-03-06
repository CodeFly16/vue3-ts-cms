import LyfRequest from '../../index';

import { IDataType } from '../../types';

export function getPageListData(url: string, queryInfo: any): any {
  return LyfRequest.post<IDataType>({
    url: url,
    data: queryInfo
  });
}

// url: /users/id
export function deletePageData(url: string): any {
  return LyfRequest.delete<IDataType>({
    url: url
  });
}

export function createPageData(url: string, newData: any): any {
  return LyfRequest.post<IDataType>({
    url: url,
    data: newData
  });
}

export function editPageData(url: string, editData: any): any {
  return LyfRequest.patch<IDataType>({
    url: url,
    data: editData
  });
}
