import React from 'react';
import { OptionState } from '../ListboxUnstyled';
import { SelectOption } from './useSelect.types';
export interface SelectUnstyledContextType {
    getOptionState: (value: SelectOption<any>) => OptionState;
    getOptionProps: (option: SelectOption<any>) => Record<string, any>;
}
export declare const SelectUnstyledContext: React.Context<SelectUnstyledContextType | undefined>;
