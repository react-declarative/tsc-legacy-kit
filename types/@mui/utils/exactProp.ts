import { ValidationMap } from 'prop-types';
export type exactProp = <T>(propTypes: ValidationMap<T>) => ValidationMap<T>;
export default exactProp;
