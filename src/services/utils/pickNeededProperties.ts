import { IRawUserData } from '../../types';

export function pickNeededPropertiesforUsersTable(data: IRawUserData[]) {
  return data.map(({ name, age, phoneNumber, email, city, company }) => ({
    name,
    age,
    phoneNumber,
    email,
    city,
    company,
  }));
}
export default pickNeededPropertiesforUsersTable;
