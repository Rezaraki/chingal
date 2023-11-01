import { SortOrder } from 'antd/lib/table/interface';
import { IRawUserData } from '../../types';

export const getSortOrderFromLocal = () => localStorage.getItem('sortOrder') as SortOrder;
export const setSortOrdertoLocal = (sortOrder: SortOrder) => sortOrder && localStorage.setItem('sortOrder', sortOrder);

export function pickNeededProperties(data: IRawUserData[]) {
  return data.map(({ name, age, phoneNumber, email, city, company, id }) => ({
    name,
    age,
    phoneNumber,
    email,
    city,
    company,
    id,
  }));
}
