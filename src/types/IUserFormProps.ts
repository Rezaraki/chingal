export interface IUserFormProps {
  formInstance: FormInstance<any>;
  onDelClickHandle: () => void;
  onEditClickHandle: (values: IProfileFormData) => void;
}
