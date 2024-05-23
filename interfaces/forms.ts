export interface IAuthForm {
  type: 'signin' | 'signup';
  refererPath?: string | undefined;
}
