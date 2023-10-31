import { IProfileData } from '../../types';
import configuredAxios from './axiosConfig';

export async function getUsers() {
  const result = await configuredAxios('/users');

  return result.data;
}
export async function getUserProfile(userId: number | string) {
  const result = await configuredAxios(`/users/${userId}`);

  return result.data;
}
export async function editUserProfile(userData: IProfileData) {
  const result = await configuredAxios.put(`/users/${userData.id}`, userData);

  return result.data;
}
export async function delUser(userId: number | string) {
  const result = await configuredAxios.delete(`/users/${userId}`);

  return result.data;
}
