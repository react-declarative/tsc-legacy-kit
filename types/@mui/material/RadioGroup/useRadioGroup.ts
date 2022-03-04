import { RadioGroupContextValue } from './RadioGroupContext';
export interface RadioGroupState extends RadioGroupContextValue {
}
export type useRadioGroup = () => RadioGroupState | undefined;
export default useRadioGroup;
