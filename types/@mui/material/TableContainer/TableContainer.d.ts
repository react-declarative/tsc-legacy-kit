import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '..';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { TableContainerClasses } from './tableContainerClasses';
export interface TableContainerTypeMap<P = {}, D extends React.ElementType = 'div'> {
    props: P & {
        /**
         * The content of the component, normally `Table`.
         */
        children?: React.ReactNode;
        /**
         * Override or extend the styles applied to the component.
         */
        classes?: Partial<TableContainerClasses>;
        /**
         * The system prop that allows defining system overrides as well as additional CSS styles.
         */
        sx?: SxProps<Theme>;
    };
    defaultComponent: D;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TableContainer API](https://mui.com/api/table-container/)
 */
declare const TableContainer: OverridableComponent<TableContainerTypeMap>;
export declare type TableContainerProps<D extends React.ElementType = TableContainerTypeMap['defaultComponent'], P = {}> = OverrideProps<TableContainerTypeMap<P, D>, D>;
export default TableContainer;
