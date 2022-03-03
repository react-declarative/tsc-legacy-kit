import { ListboxAction, ListboxReducer, ListboxState, UseListboxStrictProps } from './useListbox.types';
export declare type useControllableReducer = <TOption>(internalReducer: ListboxReducer<TOption>, externalReducer: ListboxReducer<TOption> | undefined, props: UseListboxStrictProps<TOption>) => [ListboxState<TOption>, (action: ListboxAction<TOption>) => void];
export default useControllableReducer;
