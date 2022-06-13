import { FormInstance } from 'antd';

export declare interface IFormActionRef<T = any> {
  onValidate: () => Promise<any> | undefined;
  form: FormInstance<T>;
}

export declare type FormActionType<T = any> = IFormActionRef<T> | undefined;
