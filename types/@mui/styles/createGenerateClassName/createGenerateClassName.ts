import { GenerateId } from 'jss';
export interface GenerateClassNameOptions {
    disableGlobal?: boolean;
    productionPrefix?: string;
    seed?: string;
}
export type createGenerateClassName = (options?: GenerateClassNameOptions) => GenerateId;
export default createGenerateClassName;
