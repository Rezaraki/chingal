import configuredAxios from './axiosConfig';

export async function getUsers() {
  const result = await configuredAxios('/users');

  return result.data;
}
