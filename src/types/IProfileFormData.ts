import { IProfileData } from './IProfileData';

export type IProfileFormData = Omit<IProfileData, 'avatar' | 'id'>;
