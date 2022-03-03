import { ListboxState, ListboxAction } from './useListbox.types';
export declare type defaultListboxReducer<TOption> = (state: Readonly<ListboxState<TOption>>, action: ListboxAction<TOption>) => Readonly<ListboxState<TOption>>;
export default defaultListboxReducer;
