import { IRawUserData } from '../../types';

export function pickNeededPropertiesforUsersTable(data: IRawUserData[]) {
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
export default pickNeededPropertiesforUsersTable;
