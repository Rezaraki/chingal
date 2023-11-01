import { FormInstance } from 'antd';
import { IProfileFormData } from './IProfileFormData';

export interface IUserFormProps {
  formInstance: FormInstance<any>;
  onDelClickHandle: () => void;
  onEditClickHandle: (values: IProfileFormData) => void;
}
