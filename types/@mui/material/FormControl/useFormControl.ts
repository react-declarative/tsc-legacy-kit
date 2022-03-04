import { FormControlProps } from './FormControl';
export {};
declare type ContextFromPropsKey = 'disabled' | 'error' | 'fullWidth' | 'hiddenLabel' | 'margin' | 'required' | 'variant';
export interface FormControlState extends Pick<FormControlProps, ContextFromPropsKey> {
    adornedStart: boolean;
    filled: boolean;
    focused: boolean;
    onBlur: () => void;
    onEmpty: () => void;
    onFilled: () => void;
    onFocus: () => void;
}
export type useFormControl = () => FormControlState | undefined;
export default useFormControl;