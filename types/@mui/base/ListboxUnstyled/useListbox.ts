import { UseListboxParameters, OptionState, UseListboxOptionSlotProps, UseListboxRootSlotProps } from './useListbox.types';
import { EventHandlers } from '../utils/types';
export declare type useListbox<TOption> = (props: UseListboxParameters<TOption>) => {
    getRootProps: <TOther extends EventHandlers = {}>(otherHandlers?: TOther) => UseListboxRootSlotProps<TOther>;
    getOptionProps: <TOther_1 extends EventHandlers = {}>(option: TOption, otherHandlers?: TOther_1) => UseListboxOptionSlotProps<TOther_1>;
    getOptionState: (option: TOption) => OptionState;
    selectedOption: TOption | TOption[] | null;
    highlightedOption: NonNullable<TOption> | null;
};
export default useListbox;
