import React from 'react';
import { Theme, ComponentsPropsList, SxProps as SxProps$1 } from '@mui/material/styles';
import { AutocompleteProps } from '@mui/material/Autocomplete';
import { IconButtonProps } from '@mui/material/IconButton';
import { MenuItemProps } from '@mui/material/MenuItem';
import { InputBaseProps } from '@mui/material/InputBase';
import { SelectProps } from '@mui/material/Select';
import { ClickAwayListenerProps } from '@mui/material/ClickAwayListener';
import { GrowProps } from '@mui/material/Grow';
import { PopperProps } from '@mui/material/Popper';
import { SxProps, MUIStyledCommonProps } from '@mui/system';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import { CommonProps } from '@mui/material/OverridableComponent';
import * as _mui_material from '@mui/material';
import { InternalStandardProps } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField';
import { ButtonProps } from '@mui/material/Button';
import { TooltipProps } from '@mui/material/Tooltip';
interface GridBodyProps {
    children?: React.ReactNode;
    VirtualScrollerComponent: React.JSXElementConstructor<React.HTMLAttributes<HTMLDivElement> & {
        ref: React.Ref<HTMLDivElement>;
        disableVirtualization: boolean;
    }>;
    ColumnHeadersComponent: React.JSXElementConstructor<React.HTMLAttributes<HTMLDivElement> & {
        ref: React.Ref<HTMLDivElement>;
        innerRef: React.Ref<HTMLDivElement>;
    }>;
}
declare function GridBody(props: GridBodyProps): JSX.Element;
declare namespace GridBody {
    var propTypes: any;
}
declare function GridErrorHandler(props: any): JSX.Element;
declare function GridFooterPlaceholder(): JSX.Element | null;
declare function GridHeaderPlaceholder(): JSX.Element;
declare function GridOverlays(): JSX.Element | null;
/**
 * Filter item definition interface.
 */
interface GridFilterItem {
    /**
     * Must be unique.
     * Only useful when the model contains several items.
     */
    id?: number | string;
    /**
     * The column from which we want to filter the rows.
     */
    columnField: string;
    /**
     * The filtering value.
     * The operator filtering function will decide for each row if the row values is correct compared to this value.
     */
    value?: any;
    /**
     * The name of the operator we want to apply.
     */
    operatorValue?: string;
}
declare enum GridLinkOperator {
    And = "and",
    Or = "or"
}
interface GridFilterInputValueProps {
    item: GridFilterItem;
    applyValue: (value: GridFilterItem) => void;
    apiRef: any;
    focusElementRef?: React.Ref<any>;
}
declare type GridFilterInputMultipleValueProps = {
    item: GridFilterItem;
    applyValue: (value: GridFilterItem) => void;
    apiRef: any;
    focusElementRef?: React.Ref<any>;
    type?: 'text' | 'number';
} & Omit<AutocompleteProps<any[], true, false, true>, 'options' | 'renderInput'>;
declare function GridFilterInputMultipleValue(props: GridFilterInputMultipleValueProps): JSX.Element;
declare namespace GridFilterInputMultipleValue {
    var propTypes: any;
}
declare type GridFilterInputMultipleSingleSelectProps = {
    item: GridFilterItem;
    applyValue: (value: GridFilterItem) => void;
    apiRef: any;
    focusElementRef?: React.Ref<any>;
    type?: 'singleSelect';
} & Omit<AutocompleteProps<any[], true, false, true>, 'options' | 'renderInput'>;
declare function GridFilterInputMultipleSingleSelect(props: GridFilterInputMultipleSingleSelectProps): JSX.Element;
declare namespace GridFilterInputMultipleSingleSelect {
    var propTypes: any;
}
/**
 * The mode of the cell.
 */
declare type GridCellMode = 'edit' | 'view';
/**
 * The mode of the row.
 */
declare type GridRowMode = 'edit' | 'view';
/**
 * The cell value type.
 */
declare type GridCellValue = string | number | boolean | Date | null | undefined | object;
/**
 * The coordinates of cell represented by their row and column indexes.
 */
interface GridCellIndexCoordinates {
    colIndex: number;
    rowIndex: number;
}
/**
 * The coordinates of column header represented by their row and column indexes.
 */
interface GridColumnHeaderIndexCoordinates {
    colIndex: number;
}
declare type GridRowsProp = Readonly<GridRowModel[]>;
/**
 * @deprecated prefer GridRowModel.
 */
declare type GridRowData<T = {
    [key: string]: any;
}> = T;
/**
 * The key value object representing the data of a row.
 */
declare type GridRowModel<T = {
    [key: string]: any;
}> = T;
declare type GridUpdateAction = 'delete';
interface GridRowModelUpdate extends GridRowModel {
    _action?: GridUpdateAction;
}
interface GridRowTreeNodeConfig {
    /**
     * The grid row id.
     */
    id: GridRowId;
    /**
     * The id of the row children.
     * @default []
     */
    children?: GridRowId[];
    /**
     * The row id of the parent (null if this row is a top level row).
     */
    parent: GridRowId | null;
    /**
     * Current expansion status of the row.
     * @default false
     */
    childrenExpanded?: boolean;
    /**
     * 0-based depth of the row in the tree.
     */
    depth: number;
    /**
     * The key used to group the children of this row.
     */
    groupingKey: GridKeyValue;
    /**
     * The field used to group the children of this row.
     * Is `null` if no field has been used to group the children of this row.
     */
    groupingField: string | null;
    /**
     * If `true`, this node has been automatically added to fill a gap in the tree structure.
     * @default false
     */
    isAutoGenerated?: boolean;
}
/**
 * The grid rows total height and row possitions.
 */
interface GridRowsMeta {
    /**
     * The sum of of all grid rows.
     */
    totalHeight: number;
    /**
     * The grid rows possitions.
     */
    positions: number[];
}
declare type GridRowTreeConfig = Record<GridRowId, GridRowTreeNodeConfig>;
declare type GridRowsLookup = Record<GridRowId, GridRowModel>;
/**
 * The type of Id supported by the grid.
 */
declare type GridRowId = string | number;
declare type GridRowEntry = {
    id: GridRowId;
    model: GridRowModel;
};
/**
 * The function to retrieve the id of a [[GridRowModel]].
 */
declare type GridRowIdGetter = (row: GridRowModel) => GridRowId;
/**
 * An helper function to check if the id provided is valid.
 * @param {GridRowId} id Id as [[GridRowId]].
 * @param {GridRowModel | Partial<GridRowModel>} row Row as [[GridRowModel]].
 * @param {string} detailErrorMessage A custom error message to display for invalid IDs
 */
declare function checkGridRowIdIsValid(id: GridRowId, row: GridRowModel | Partial<GridRowModel>, detailErrorMessage?: string): void;
interface GridEditCellProps {
    value: GridCellValue;
    isValidating?: boolean;
    [prop: string]: any;
}
declare type GridEditRowProps = {
    [field: string]: GridEditCellProps;
};
declare type GridEditRowsModel = {
    [rowId: string]: GridEditRowProps;
};
declare type GridEditMode = 'cell' | 'row';
declare enum GridEditModes {
    Cell = "cell",
    Row = "row"
}
declare enum GridCellModes {
    Edit = "edit",
    View = "view"
}
declare enum GridRowModes {
    Edit = "edit",
    View = "view"
}
/**
 * A function used to process cellClassName params.
 */
declare type GridCellClassFn = (params: GridCellParams) => string;
/**
 * The union type representing the [[GridColDef]] cell class type.
 */
declare type GridCellClassNamePropType = string | GridCellClassFn;
/**
 * Object passed as parameter in the column [[GridColDef]] header renderer.
 */
interface GridColumnHeaderParams {
    /**
     * The column field of the column that triggered the event
     */
    field: string;
    /**
     * The column of the current header component.
     */
    colDef: GridStateColDef;
}
/**
 * A function used to process headerClassName params.
 */
declare type GridColumnHeaderClassFn = (params: GridColumnHeaderParams) => string;
/**
 * The union type representing the [[GridColDef]] column header class type.
 */
declare type GridColumnHeaderClassNamePropType = string | GridColumnHeaderClassFn;
interface GridEditCellPropsParams {
    id: GridRowId;
    field: string;
    props: GridEditCellProps;
}
interface GridEditCellValueParams {
    id: GridRowId;
    field: string;
    value: GridCellValue;
    debounceMs?: number;
}
interface GridCommitCellChangeParams {
    id: GridRowId;
    field: string;
}
interface GridCellEditCommitParams {
    id: GridRowId;
    field: string;
    value: GridCellValue;
}
declare type MuiBaseEvent = React.SyntheticEvent<HTMLElement> | DocumentEventMap[keyof DocumentEventMap] | {};
declare type MuiEvent<E extends MuiBaseEvent = MuiBaseEvent> = E & {
    defaultMuiPrevented?: boolean;
};
/**
 * The shared methods used by the cell and row editing API.
 */
interface GridEditingSharedApi {
    /**
     * Set the edit rows model of the grid.
     * @param {GridEditRowsModel} model The new edit rows model.
     */
    setEditRowsModel: (model: GridEditRowsModel) => void;
    /**
     * Gets the edit rows model of the grid.
     * @returns {GridEditRowsModel} The edit rows model.
     */
    getEditRowsModel: () => GridEditRowsModel;
    /**
     * Controls if a cell is editable.
     * @param {GridCellParams} params The cell params.
     * @returns {boolean} A boolean value determining if the cell is editable.
     */
    isCellEditable: (params: GridCellParams) => boolean;
    /**
     * Sets the value of the edit cell.
     * Commonly used inside the edit cell component.
     * @param {GridEditCellValueParams} params Contains the id, field and value to set.
     * @param {React.SyntheticEvent} event The event to pass forward.
     * @returns {Promise<boolean> | void} A promise with the validation status if `preventCommitWhileValidating` is `true`. Otherwise, void.
     */
    setEditCellValue: (params: GridEditCellValueParams, event?: MuiBaseEvent) => Promise<boolean> | void;
    /**
     * Immediatelly updates the value of the cell, without waiting for the debounce.
     * @param {GridRowId} id The row id.
     * @param {string} field The field to update. If not passed, updates all fields in the given row id.
     * @ignore - do not document.
     */
    unstable_runPendingEditCellValueChangeDebounce: (id: GridRowId, field?: string) => void;
    /**
     * @ignore - do not document.
     */
    unstable_setEditCellProps: (params: GridEditCellPropsParams) => GridEditCellProps;
    /**
     * @ignore - do not document.
     */
    unstable_parseValue: (id: GridRowId, field: string, value: GridCellValue) => GridCellValue;
}
/**
 * The row editing API interface.
 */
interface GridRowEditingApi extends GridEditingSharedApi {
    /**
     * Sets the mode of a row.
     * @param {GridRowId} id The id of the row.
     * @param {GridRowMode} mode Can be: `"edit"`, `"view"`.
     */
    setRowMode: (id: GridRowId, mode: GridRowMode) => void;
    /**
     * Gets the mode of a row.
     * @param {GridRowId} id The id of the row.
     * @returns {GridRowMode} Returns `"edit"` or `"view"`.
     */
    getRowMode: (id: GridRowId) => GridRowMode;
    /**
     * Updates the row at the given id with the values stored in the edit row model.
     * @param {GridRowId} id The id to commit to.
     * @param {React.SyntheticEvent} event The event to pass forward.
     * @returns {boolean} A boolean indicating if there is an error.
     */
    commitRowChange: (id: GridRowId, event?: MuiBaseEvent) => boolean | Promise<boolean>;
    /**
     * Updates the value of a cell and calls all `preProcessEditCellProps` if necessary.
     * @param {GridCommitCellChangeParams} params Object with the new value and id and field to update.
     * @returns {Promise<boolean>} Resolves with `true` when all values in the row are valid.
     * @ignore - do not document.
     */
    unstable_setRowEditingEditCellValue: (params: GridEditCellValueParams) => Promise<boolean>;
}
/**
 * The cell editing API interface.
 */
interface GridCellEditingApi extends GridEditingSharedApi {
    /**
     * Updates the field at the given id with the value stored in the edit row model.
     * @param {GridCommitCellChangeParams} params The id and field to commit to.
     * @param {React.SyntheticEvent} event The event to pass forward.
     * @returns {boolean} A boolean indicating if there is an error.
     */
    commitCellChange: (params: GridCommitCellChangeParams, event?: MuiBaseEvent) => boolean | Promise<boolean>;
    /**
     * Sets the mode of a cell.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The field to change the mode.
     * @param {GridCellMode} mode Can be: `"edit"`, `"view"`.
     */
    setCellMode: (id: GridRowId, field: string, mode: GridCellMode) => void;
    /**
     * Gets the mode of a cell.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The field to get the mode.
     * @returns {GridCellMode} Returns `"edit"` or `"view"`.
     */
    getCellMode: (id: GridRowId, field: string) => GridCellMode;
    /**
     * Updates the value of a cell and calls `preProcessEditCellProps` if necessary.
     * @param {GridCommitCellChangeParams} params Object with the new value and id and field to update.
     * @returns {Promise<boolean>} Resolves with `true` when the new value is valid.
     * @ignore - do not document.
     */
    unstable_setCellEditingEditCellValue: (params: GridEditCellValueParams) => Promise<boolean>;
}
/**
 * The editing API interface that is available in the grid `apiRef`.
 */
interface GridEditingApi extends GridCellEditingApi, GridRowEditingApi {
}
/**
 * The apiRef component prop type.
 */
declare type GridApiRef = React.MutableRefObject<GridApi>;
/**
 * Object passed as parameter in the row callbacks.
 */
interface GridRowParams<R extends GridRowModel = GridRowModel> {
    /**
     * The grid row id.
     */
    id: GridRowId;
    /**
     * The row model of the row that the current cell belongs to.
     */
    row: R;
    /**
     * All grid columns.
     */
    columns: GridColumns;
    /**
     * Get the cell value of a row and field.
     * @param {GridRowId} id The row id.
     * @param {string} field The field.
     * @returns {GridCellValue} The cell value.
     * @deprecated Use `params.row` to directly access the fields you want instead.
     */
    getValue: (id: GridRowId, field: string) => GridCellValue;
}
/**
 * Object passed as parameter in the row getRowHeight callback.
 */
interface GridRowHeightParams extends GridRowEntry {
    /**
     * The grid current density factor.
     */
    densityFactor: number;
}
/**
 * The getRowHeight return value.
 */
declare type GridRowHeightReturnValue = number | null | undefined;
interface GridParamsApi {
    /**
     * Gets the value of a cell at the given `id` and `field`.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The column field.
     * @returns {GridCellValue} The cell value.
     */
    getCellValue: (id: GridRowId, field: string) => GridCellValue;
    /**
     * Gets the underlying DOM element for a cell at the given `id` and `field`.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The column field.
     * @returns {HTMLDivElement | null} The DOM element or `null`.
     */
    getCellElement: (id: GridRowId, field: string) => HTMLDivElement | null;
    /**
     * Gets the [[GridCellParams]] object that is passed as argument in events.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The column field.
     * @returns {GridCellParams} The cell params.
     */
    getCellParams: (id: GridRowId, field: string) => GridCellParams;
    /**
     * Gets the [[GridRowParams]] object that is passed as argument in events.
     * @param {GridRowId} id The id of the row.
     * @param {string} field The column field.
     * @returns {GridRowParams} The row params.
     */
    getRowParams: (id: GridRowId) => GridRowParams;
    /**
     * Gets the underlying DOM element for a row at the given `id`.
     * @param {GridRowId} id The id of the row.
     * @returns {HTMLDivElement | null} The DOM element or `null`.
     */
    getRowElement: (id: GridRowId) => HTMLDivElement | null;
    /**
     * Gets the underlying DOM element for the column header with the given `field`.
     * @param {string} field The column field.
     * @returns {HTMLDivElement | null} The DOM element or `null`.
     */
    getColumnHeaderElement: (field: string) => HTMLDivElement | null;
    /**
     * Gets the [[GridColumnHeaderParams]] object that is passed as argument in events.
     * @param {string} field The column field.
     * @returns {GridColumnHeaderParams} The cell params.
     */
    getColumnHeaderParams: (field: string) => GridColumnHeaderParams;
}
/**
 * Additional details passed to the callbacks
 */
interface GridCallbackDetails {
    /**
     * Provided only if `DataGridPro` is being used.
     */
    api?: GridApi;
}
declare enum GridEvents {
    /**
     * Fired when the grid is resized.
     */
    resize = "resize",
    /**
     * Fired when the grid is resized with a debounced time of 60ms.
     */
    debouncedResize = "debouncedResize",
    /**
     * Fired when the inner size of the viewport changes. Called with an [[ElementSize]] object.
     */
    viewportInnerSizeChange = "viewportInnerSizeChange",
    /**
     * Fired when an exception is thrown in the grid.
     */
    componentError = "componentError",
    /**
     * Fired when the grid is unmounted.
     */
    unmount = "unmount",
    /**
     * Fired when the mode of a cell changes.
     * @ignore - do not document
     */
    cellModeChange = "cellModeChange",
    /**
     * Fired when a cell is clicked.
     */
    cellClick = "cellClick",
    /**
     * Fired when a cell is double-clicked.
     */
    cellDoubleClick = "cellDoubleClick",
    /**
     * Fired when a `mousedown` event happens in a cell..
     */
    cellMouseDown = "cellMouseDown",
    /**
     * Fired when a `mouseup` event happens in a cell..
     */
    cellMouseUp = "cellMouseUp",
    /**
     * Fired when a `keydown` event happens in a cell.
     */
    cellKeyDown = "cellKeyDown",
    /**
     * Fired when a cell gains focus.
     */
    cellFocusIn = "cellFocusIn",
    /**
     * Fired when a cell loses focus.
     */
    cellFocusOut = "cellFocusOut",
    /**
     * Fired when the dragged cell enters a valid drop target. It's mapped to the `dragend` DOM event.
     * @ignore - do not document.
     */
    cellDragEnter = "cellDragEnter",
    /**
     * Fired while an element or text selection is dragged over the cell.
     * It's mapped to the `dragover` DOM event.
     * @ignore - do not document.
     */
    cellDragOver = "cellDragOver",
    /**
     * Fired when the props of the edit cell changes.
     */
    editCellPropsChange = "editCellPropsChange",
    /**
     * Fired when the props of the edit input are committed.
     */
    cellEditCommit = "cellEditCommit",
    /**
     * Fired when the cell turns to edit mode.
     */
    cellEditStart = "cellEditStart",
    /**
     * Fired when the cell turns back to view mode.
     */
    cellEditStop = "cellEditStop",
    /**
     * Fired when the row turns to edit mode.
     */
    rowEditStart = "rowEditStart",
    /**
     * Fired when the row turns back to view mode.
     */
    rowEditStop = "rowEditStop",
    /**
     * Fired when the props of the edit input are committed.
     */
    rowEditCommit = "rowEditCommit",
    /**
     * Fired when a [navigation key](/components/data-grid/accessibility#keyboard-navigation) is pressed in a cell.
     * @ignore - do not document.
     */
    cellNavigationKeyDown = "cellNavigationKeyDown",
    /**
     * Fired when a row is clicked.
     */
    rowClick = "rowClick",
    /**
     * Fired when a row is double-clicked.
     */
    rowDoubleClick = "rowDoubleClick",
    /**
     * Fired when the mouse enters the row. Called with a [[GridRowParams]] object.
     */
    rowMouseEnter = "rowMouseEnter",
    /**
     * Fired when the mouse leaves the row. Called with a [[GridRowParams]] object.
     */
    rowMouseLeave = "rowMouseLeave",
    /**
     * Fired when the row editing model changes.
     */
    editRowsModelChange = "editRowsModelChange",
    /**
     * Fired when a column header loses focus.
     * @ignore - do not document.
     */
    columnHeaderBlur = "columnHeaderBlur",
    /**
     * Fired when a column header gains focus.
     * @ignore - do not document.
     */
    columnHeaderFocus = "columnHeaderFocus",
    /**
     * Fired when a [navigation key](/components/data-grid/accessibility#keyboard-navigation) is pressed in a column header.
     * @ignore - do not document.
     */
    columnHeaderNavigationKeyDown = "columnHeaderNavigationKeyDown",
    /**
     * Fired when a key is pressed in a column header. It's mapped do the `keydown` DOM event.
     */
    columnHeaderKeyDown = "columnHeaderKeyDown",
    /**
     * Fired when a column header is clicked
     */
    columnHeaderClick = "columnHeaderClick",
    /**
     * Fired when a column header is double-clicked.
     */
    columnHeaderDoubleClick = "columnHeaderDoubleClick",
    /**
     * Fired when a `mouseover` event happens in a column header.
     * @ignore - do not document.
     */
    columnHeaderOver = "columnHeaderOver",
    /**
     * Fired when a `mouseout` event happens in a column header.
     * @ignore - do not document.
     */
    columnHeaderOut = "columnHeaderOut",
    /**
     * Fired when a `mouseenter` event happens in a column header.
     * @ignore - do not document.
     */
    columnHeaderEnter = "columnHeaderEnter",
    /**
     * Fired when a `mouseleave` event happens in a column header.
     * @ignore - do not document.*
     */
    columnHeaderLeave = "columnHeaderLeave",
    /**
     * Fired when the user starts dragging a column header. It's mapped to the `dragstart` DOM event.
     * @ignore - do not document.
     */
    columnHeaderDragStart = "columnHeaderDragStart",
    /**
     * Fired while an element or text selection is dragged over the column header.
     * It's mapped to the `dragover` DOM event.
     * @ignore - do not document.
     */
    columnHeaderDragOver = "columnHeaderDragOver",
    /**
     * Fired when the dragged column header enters a valid drop target.
     * It's mapped to the `dragend` DOM event.
     * @ignore - do not document.
     */
    columnHeaderDragEnter = "columnHeaderDragEnter",
    /**
     * Fired when the dragging of a column header ends.
     * @ignore - do not document.
     */
    columnHeaderDragEnd = "columnHeaderDragEnd",
    /**
     * Fired when the selection state of one or multiple rows changes.
     */
    selectionChange = "selectionChange",
    /**
     * Fired when the value of the selection checkbox of the header is changed
     */
    headerSelectionCheckboxChange = "headerSelectionCheckboxChange",
    /**
     * Fired when the value of the selection checkbox of a row is changed
     */
    rowSelectionCheckboxChange = "rowSelectionCheckboxChange",
    /**
     * Fired when the page changes.
     */
    pageChange = "pageChange",
    /**
     * Fired when the page size changes.
     */
    pageSizeChange = "pageSizeChange",
    /**
     * Fired when the row grouping model changes.
     */
    rowGroupingModelChange = "rowGroupingModelChange",
    /**
     * Fired during the scroll of the grid viewport.
     */
    rowsScroll = "rowsScroll",
    /**
     * Fired when scrolling to the bottom of the grid viewport.
     */
    rowsScrollEnd = "rowsScrollEnd",
    /**
     * Fired when a `mousedown` DOM event happens in the column header separator.
     * @ignore - do not document.
     */
    columnSeparatorMouseDown = "columnSeparatorMouseDown",
    /**
     * Fired during the resizing of a column.
     */
    columnResize = "columnResize",
    /**
     * Fired when the width of a column is changed.
     */
    columnWidthChange = "columnWidthChange",
    /**
     * Fired when the user starts resizing a column.
     */
    columnResizeStart = "columnResizeStart",
    /**
     * Fired when the user stops resizing a column.
     */
    columnResizeStop = "columnResizeStop",
    /**
     * Fired when the user ends reordering a column.
     */
    columnOrderChange = "columnOrderChange",
    /**
     * Fired when the rows are updated.
     * @ignore - do not document.
     */
    rowsSet = "rowsSet",
    /**
     * Fired when the expansion of a row is changed. Called with a [[GridRowTreeNodeConfig]] object.
     * @ignore - do not document.
     */
    rowExpansionChange = "rowExpansionChange",
    /**
     * Fired when the visible rows are updated
     * @ignore - do not document.
     */
    visibleRowsSet = "visibleRowsSet",
    /**
     * Fired when the columns state is changed.
     */
    columnsChange = "columnsChange",
    /**
     * Fired when the open detail panels are changed.
     * @ignore - do not document.
     */
    detailPanelsExpandedRowIdsChange = "detailPanelsExpandedRowIdsChange",
    /**
     * Fired when the pinned columns is changed.
     * @ignore - do not document.
     */
    pinnedColumnsChange = "pinnedColumnsChange",
    /**
     * Fired when a pre-processor is registered.
     * @ignore - do not document.
     */
    preProcessorRegister = "preProcessorRegister",
    /**
     * Fired when a pre-processor is unregistered.
     * @ignore - do not document.
     */
    preProcessorUnregister = "preProcessorUnregister",
    /**
     * Fired when the row grouping function is changed
     * @ignore - do not document.
     */
    rowGroupsPreProcessingChange = "rowGroupsPreProcessingChange",
    /**
     * Fired when the sort model changes.
     */
    sortModelChange = "sortModelChange",
    /**
     * Fired when the filter model changes.
     */
    filterModelChange = "filterModelChange",
    /**
     * Fired when the column visibility model changes.
     */
    columnVisibilityModelChange = "columnVisibilityModelChange",
    /**
     * Fired when the state of the grid is updated.
     */
    stateChange = "stateChange",
    /**
     * Fired when a column visibility changes.
     * It is not fired when the `columnVisibilityModel` is controlled or initialized.
     * It is not fired when toggling all column's visibility at once.
     * @deprecated Use `GridEvents.columnVisibilityModelChange` instead.
     */
    columnVisibilityChange = "columnVisibilityChange",
    /**
     * Fired when the content size used by the `GridVirtualScroller` changes.
     * @ignore - do not document.
     */
    virtualScrollerContentSizeChange = "virtualScrollerContentSizeChange"
}
declare type GridEventsStr = keyof typeof GridEvents;
/**
 * Object passed as parameter of the column order change event.
 */
interface GridColumnOrderChangeParams {
    /**
     * The HTMLElement column header element.
     */
    element?: HTMLElement | null;
    /**
     * The column field of the column that triggered the event.
     */
    field: string;
    /**
     * The column of the current header component.
     */
    colDef: GridStateColDef;
    /**
     * The target column index.
     */
    targetIndex: number;
    /**
     * The old column index.
     */
    oldIndex: number;
}
/**
 * Object passed as parameter of the column resize event.
 */
interface GridColumnResizeParams {
    /**
     * The HTMLElement column header element.
     */
    element?: HTMLElement | null;
    /**
     * The column of the current header component.
     */
    colDef: GridStateColDef;
    /**
     * The width of the column.
     */
    width: number;
}
/**
 * Object passed as parameter of the column visibility change event.
 */
interface GridColumnVisibilityChangeParams {
    /**
     * The field of the column which visibility changed.
     */
    field: string;
    /**
     * The column of the current header component.
     */
    colDef: GridStateColDef;
    /**
     * The visibility state of the column.
     */
    isVisible: boolean;
}
/**
 * Object passed as parameter in the onRowsScrollEnd callback.
 */
interface GridRowScrollEndParams {
    /**
     * The number of rows that fit in the viewport.
     */
    viewportPageSize: number;
    /**
     * The number of rows allocated for the rendered zone.
     */
    virtualRowsCount: number;
    /**
     * The grid visible columns.
     */
    visibleColumns: GridColumns;
}
interface GridRenderContext {
    firstRowIndex: number;
    lastRowIndex: number;
    firstColumnIndex: number;
    lastColumnIndex: number;
}
interface GridScrollParams {
    left: number;
    top: number;
    renderContext?: GridRenderContext;
}
declare type GridScrollFn = (v: GridScrollParams) => void;
/**
 * Object passed as parameter of the column sorted event.
 */
interface GridSortModelParams {
    /**
     * The sort model used to sort the grid.
     */
    sortModel: GridSortModel;
    /**
     * The full set of columns.
     */
    columns: GridColumns;
    /**
     * Api that let you manipulate the grid.
     */
    api: GridApi;
}
declare type GridColumnLookup = {
    [field: string]: GridStateColDef;
};
declare type GridColumnRawLookup = {
    [field: string]: GridColDef | GridStateColDef;
};
interface GridColumnsState {
    all: string[];
    lookup: GridColumnLookup;
    columnVisibilityModel: GridColumnVisibilityModel;
}
interface GridColumnsInitialState {
    columnVisibilityModel?: GridColumnVisibilityModel;
}
declare type GridColumnsRawState = Omit<GridColumnsState, 'lookup'> & {
    lookup: GridColumnRawLookup;
};
declare type GridColumnVisibilityModel = Record<GridRowId, boolean>;
interface GridColumnMenuState {
    open: boolean;
    field?: string;
}
interface OutputSelector<Result> {
    (apiRef: GridApiRef): Result;
    (state: GridState, instanceId?: number): Result;
    cache: object;
}
interface GridColumnReorderState {
    dragCol: string;
}
interface GridCanBeReorderedPreProcessingContext {
    targetIndex: number;
}
declare const gridColumnReorderSelector: (state: GridState) => GridColumnReorderState;
declare const gridColumnReorderDragColSelector: OutputSelector<string>;
interface GridColumnResizeState {
    resizingColumnField: string;
}
/**
 * Available densities.
 */
declare type GridDensity = 'compact' | 'standard' | 'comfortable';
/**
 * Density enum.
 */
declare enum GridDensityTypes {
    Compact = "compact",
    Standard = "standard",
    Comfortable = "comfortable"
}
interface GridDensityState {
    value: GridDensity;
    rowHeight: number;
    headerHeight: number;
    factor: number;
}
declare type GridCellIdentifier = {
    id: GridRowId;
    field: string;
};
declare type GridColumnIdentifier = {
    field: string;
};
interface GridFocusState {
    cell: GridCellIdentifier | null;
    columnHeader: GridColumnIdentifier | null;
}
interface GridTabIndexState {
    cell: GridCellIdentifier | null;
    columnHeader: GridColumnIdentifier | null;
}
declare enum GridPreferencePanelsValue {
    filters = "filters",
    columns = "columns"
}
interface GridPreferencePanelState {
    open: boolean;
    openedPanelValue?: GridPreferencePanelsValue;
}
declare type GridPreferencePanelInitialState = GridPreferencePanelState;
interface GridRowGroupParams {
    ids: GridRowId[];
    idRowsLookup: GridRowsLookup;
    previousTree: GridRowTreeConfig | null;
}
interface GridRowGroupingResult {
    /**
     * Name of the algorithm used to group the rows
     * It is useful to decide which filtering / sorting algorithm to apply, to avoid applying tree-data filtering on a grouping-by-column dataset for instance.
     */
    groupingName: string;
    tree: GridRowTreeConfig;
    treeDepth: number;
    ids: GridRowId[];
    idRowsLookup: GridRowsLookup;
}
declare type GridRowGroupingPreProcessing = (params: GridRowGroupParams) => GridRowGroupingResult | null;
interface GridRowGroupsPreProcessingApi {
    /**
     * Register a column pre-processing and emit an event to re-apply the row grouping pre-processing.
     * @param {string} processingName Name of the pre-processing. Used to clean the previous version of the pre-processing.
     * @param {GridRowGroupingPreProcessing} columnsPreProcessing Pre-processing to register.
     * @ignore - do not document.
     */
    unstable_registerRowGroupsBuilder: (processingName: string, groupingFunction: GridRowGroupingPreProcessing | null) => void;
    /**
     * Apply the first row grouping pre-processing that does not return null.
     * @param {GridRowsLookup} rowsLookup. Lookup of the rows to group.
     * @param {GridRowId[]} List of the rows IDs.
     * @returns {GridRowGroupingResult} The grouped rows.
     * @ignore - do not document.
     */
    unstable_groupRows: (params: GridRowGroupParams) => GridRowGroupingResult;
}
interface GridRowsState extends GridRowGroupingResult {
    /**
     * Amount of rows before applying the filtering.
     * It also count the expanded and collapsed children rows.
     */
    totalRowCount: number;
    /**
     * Amount of rows before applying the filtering.
     * It does not count the expanded children rows.
     */
    totalTopLevelRowCount: number;
}
declare type GridInputSelectionModel = GridRowId[] | GridRowId;
declare type GridSelectionModel = GridRowId[];
interface GridSortingState {
    sortedRows: GridRowId[];
    sortModel: GridSortModel;
}
interface GridSortingInitialState {
    sortModel?: GridSortModel;
}
declare type GridSortingModelApplier = (rowList: GridRowTreeNodeConfig[]) => GridRowId[];
interface GridSortingParams {
    sortRowList: GridSortingModelApplier | null;
}
declare type GridSortingMethod = (params: GridSortingParams) => GridRowId[];
declare type GridSortingMethodCollection = {
    [methodName: string]: GridSortingMethod;
};
interface GridPaginationState {
    pageSize: number;
    page: number;
    pageCount: number;
    rowCount: number;
}
interface GridPaginationInitialState {
    pageSize?: number;
    page?: number;
}
/**
 * The apiRef methods handled by `useGridPageSize`
 */
interface GridPageSizeApi {
    /**
     * Sets the number of displayed rows to the value given by `pageSize`.
     * @param {number} pageSize The new number of displayed rows.
     */
    setPageSize: (pageSize: number) => void;
}
/**
 * The apiRef methods handled by `useGridPage`
 */
interface GridPageApi {
    /**
     * Sets the displayed page to the value given by `page`.
     * @param {number} page The new page number.
     */
    setPage: (page: number) => void;
}
/**
 * The pagination API interface that is available in the grid [[apiRef]].
 */
interface GridPaginationApi extends GridPageApi, GridPageSizeApi {
}
/**
 * @category Pagination
 * @ignore - do not document.
 */
declare const gridPaginationSelector: (state: GridState) => GridPaginationState;
/**
 * Get the index of the page to render if the pagination is enabled
 * @category Pagination
 */
declare const gridPageSelector: OutputSelector<number>;
/**
 * Get the maximum amount of rows to display on a single page if the pagination is enabled
 * @category Pagination
 */
declare const gridPageSizeSelector: OutputSelector<number>;
/**
 * Get the amount of pages needed to display all the rows if the pagination is enabled
 * @category Pagination
 */
declare const gridPageCountSelector: OutputSelector<number>;
/**
 * Get the index of the first and the last row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
declare const gridPaginationRowRangeSelector: OutputSelector<{
    firstRowIndex: number;
    lastRowIndex: number;
} | null>;
/**
 * Get the id and the model of each row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
declare const gridPaginatedVisibleSortedGridRowEntriesSelector: OutputSelector<{
    id: GridRowId;
    model: {
        [key: string]: any;
    };
}[]>;
/**
 * Get the id of each row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
declare const gridPaginatedVisibleSortedGridRowIdsSelector: OutputSelector<GridRowId[]>;
/**
 * Model describing the filters to apply to the grid.
 */
interface GridFilterModel {
    /**
     * @default []
     */
    items: GridFilterItem[];
    /**
     * - `GridLinkOperator.And`: the row must pass all the filter items.
     * - `GridLinkOperator.Or`: the row must pass at least on filter item.
     * @default `GridLinkOperator.Or`
     */
    linkOperator?: GridLinkOperator;
}
declare const getDefaultGridFilterModel: () => GridFilterModel;
interface GridFilterState {
    filterModel: GridFilterModel;
    /**
     * Filtering status for each row.
     * A row is filtered if it is passing the filters, whether its parents are expanded or not.
     * If a row is not registered in this lookup, it is filtered.
     * This is the equivalent of the `visibleRowsLookup` if all the groups were expanded.
     */
    filteredRowsLookup: Record<GridRowId, boolean>;
    /**
     * Visibility status for each row.
     * A row is visible if it is passing the filters AND if its parents are expanded.
     * If a row is not registered in this lookup, it is visible.
     */
    visibleRowsLookup: Record<GridRowId, boolean>;
    /**
     * Amount of descendants that are passing the filters.
     * For the Tree Data, it includes all the intermediate depth levels (= amount of children + amount of grand children + ...).
     * For the Row Grouping by Column, it does not include the intermediate depth levels (= amount of descendant of maximum depth).
     * If a row is not registered in this lookup, it is supposed to have no descendant passing the filters.
     */
    filteredDescendantCountLookup: Record<GridRowId, number>;
}
interface GridFilterInitialState {
    filterModel?: GridFilterModel;
}
/**
 * @param {GridRowId} rowId The id of the row we want to filter.
 * @param {(filterItem: GridFilterItem) => boolean} shouldApplyItem An optional callback to allow the filtering engine to only apply some items.
 */
declare type GridAggregatedFilterItemApplier = (rowId: GridRowId, shouldApplyItem?: (filterItem: GridFilterItem) => boolean) => boolean;
interface GridFilteringParams {
    isRowMatchingFilters: GridAggregatedFilterItemApplier | null;
}
declare type GridFilteringMethod = (params: GridFilteringParams) => Omit<GridFilterState, 'filterModel'>;
declare type GridFilteringMethodCollection = {
    [methodName: string]: GridFilteringMethod;
};
declare type GridRowGroupingModel = string[];
interface GridRowGroupingState {
    model: GridRowGroupingModel;
}
interface GridRowGroupingInitialState {
    model?: GridRowGroupingModel;
}
interface GridRowGroupingApi {
    /**
     * Sets the columns to use as grouping criteria.
     * @param {GridRowGroupingModel} model The columns to use as grouping criteria.
     */
    setRowGroupingModel: (model: GridRowGroupingModel) => void;
    /**
     * Adds the field to the row grouping model.
     * @param {string} groupingCriteriaField The field from which we want to group the rows.
     * @param {number | undefined} groupingIndex The grouping index at which we want to insert the new grouping criteria. By default, it will be inserted at the end of the model.
     */
    addRowGroupingCriteria: (groupingCriteriaField: string, groupingIndex?: number) => void;
    /**
     * sRemove the field from the row grouping model.
     * @param {string} groupingCriteriaField The field from which we want to stop grouping the rows.
     */
    removeRowGroupingCriteria: (groupingCriteriaField: string) => void;
    /**
     * Sets the grouping index of a grouping criteria.
     * @param {string} groupingCriteriaField The field of the grouping criteria from which we want to change the grouping index.
     * @param {number} groupingIndex The new grouping index of this grouping criteria.
     */
    setRowGroupingCriteriaIndex: (groupingCriteriaField: string, groupingIndex: number) => void;
}
declare const gridRowGroupingStateSelector: (state: GridState) => GridRowGroupingState;
declare const gridRowGroupingModelSelector: OutputSelector<GridRowGroupingModel>;
declare const gridRowGroupingSanitizedModelSelector: OutputSelector<string[]>;
/**
 * @category Filtering
 */
declare const gridFilterStateSelector: (state: GridState) => GridFilterState;
/**
 * Get the current filter model.
 * @category Filtering
 */
declare const gridFilterModelSelector: OutputSelector<GridFilterModel>;
/**
 * @category Filtering
 * @ignore - do not document.
 */
declare const gridVisibleRowsLookupSelector: OutputSelector<Record<GridRowId, boolean>>;
/**
 * @category Filtering
 * @ignore - do not document.
 */
declare const gridFilteredRowsLookupSelector: OutputSelector<Record<GridRowId, boolean>>;
/**
 * @category Filtering
 * @ignore - do not document.
 */
declare const gridFilteredDescendantCountLookupSelector: OutputSelector<Record<GridRowId, number>>;
/**
 * Get the id and the model of the rows accessible after the filtering process.
 * Does not contain the collapsed children.
 * @category Filtering
 */
declare const gridVisibleSortedRowEntriesSelector: OutputSelector<{
    id: GridRowId;
    model: {
        [key: string]: any;
    };
}[]>;
/**
 * Get the id of the rows accessible after the filtering process.
 * Does not contain the collapsed children.
 * @category Filtering
 */
declare const gridVisibleSortedRowIdsSelector: OutputSelector<GridRowId[]>;
/**
 * Get the id and the model of the rows accessible after the filtering process.
 * Contains the collapsed children.
 * @category Filtering
 */
declare const gridFilteredSortedRowEntriesSelector: OutputSelector<{
    id: GridRowId;
    model: {
        [key: string]: any;
    };
}[]>;
/**
 * Get the id of the rows accessible after the filtering process.
 * Contains the collapsed children.
 * @category Filtering
 */
declare const gridFilteredSortedRowIdsSelector: OutputSelector<GridRowId[]>;
/**
 * @category Filtering
 * @deprecated Use `gridVisibleSortedRowIdsSelector` instead
 * @ignore - do not document.
 */
declare const gridVisibleRowsSelector: OutputSelector<GridRowId[]>;
/**
 * Get the id and the model of the top level rows accessible after the filtering process.
 * @category Filtering
 */
declare const gridVisibleSortedTopLevelRowEntriesSelector: OutputSelector<{
    id: GridRowId;
    model: {
        [key: string]: any;
    };
}[]>;
/**
 * Get the amount of rows accessible after the filtering process.
 * @category Filtering
 */
declare const gridVisibleRowCountSelector: OutputSelector<number>;
/**
 * Get the amount of top level rows accessible after the filtering process.
 * @category Filtering
 */
declare const gridVisibleTopLevelRowCountSelector: OutputSelector<number>;
/**
 * @category Filtering
 * @ignore - do not document.
 */
declare const gridFilterActiveItemsSelector: OutputSelector<GridFilterItem[]>;
declare type GridFilterActiveItemsLookup = {
    [columnField: string]: GridFilterItem[];
};
/**
 * @category Filtering
 * @ignore - do not document.
 */
declare const gridFilterActiveItemsLookupSelector: OutputSelector<GridFilterActiveItemsLookup>;
declare const GridFeatureModeConstant: {
    client: "client";
    server: "server";
};
declare type GridFeatureMode = 'client' | 'server';
interface Logger {
    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
}
/**
 * Set of icons used in the grid component UI.
 * TODO: Differentiate community and pro interface
 */
interface GridIconSlotsComponent {
    /**
     * Icon displayed on the boolean cell to represent the true value.
     * @default GridCheckIcon
     */
    BooleanCellTrueIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the boolean cell to represent the false value.
     * @default GridCloseIcon
     */
    BooleanCellFalseIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the side of the column header title to display the filter input component.
     * @default GridTripleDotsVerticalIcon
     */
    ColumnMenuIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the open filter button present in the toolbar by default.
     * @default GridFilterListIcon
     */
    OpenFilterButtonIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the column header menu to show that a filter has been applied to the column.
     * @default GridFilterAltIcon
     */
    ColumnFilteredIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the column menu selector tab.
     * @default GridColumnIcon
     */
    ColumnSelectorIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the side of the column header title when unsorted.
     * @default GridColumnUnsortedIcon
     */
    ColumnUnsortedIcon: React.JSXElementConstructor<any> | null;
    /**
     * Icon displayed on the side of the column header title when sorted in ascending order.
     * @default GridArrowUpwardIcon
     */
    ColumnSortedAscendingIcon: React.JSXElementConstructor<any> | null;
    /**
     * Icon displayed on the side of the column header title when sorted in descending order.
     * @default GridArrowDownwardIcon
     */
    ColumnSortedDescendingIcon: React.JSXElementConstructor<any> | null;
    /**
     * Icon displayed in between two column headers that allows to resize the column header.
     * @default GridSeparatorIcon
     */
    ColumnResizeIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the compact density option in the toolbar.
     * @default GridViewHeadlineIcon
     */
    DensityCompactIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the standard density option in the toolbar.
     * @default GridTableRowsIcon
     */
    DensityStandardIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the "comfortable" density option in the toolbar.
     * @default GridViewStreamIcon
     */
    DensityComfortableIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the open export declare button present in the toolbar by default.
     * @default GridSaveAltIcon
     */
    ExportIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the `actions` column type to open the menu.
     * @default GridMoreVertIcon
     */
    MoreActionsIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the tree data toggling column when the children are collapsed
     * @default GridKeyboardArrowRight
     */
    TreeDataExpandIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the tree data toggling column when the children are expanded
     * @default GridExpandMoreIcon
     */
    TreeDataCollapseIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the grouping column when the children are collapsed
     * @default GridKeyboardArrowRight
     */
    GroupingCriteriaExpandIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the grouping column when the children are expanded
     * @default GridExpandMoreIcon
     */
    GroupingCriteriaCollapseIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the detail panel toggle column when collapsed.
     * @default GridAddIcon
     */
    DetailPanelExpandIcon: React.JSXElementConstructor<any>;
    /**
     * Icon displayed on the detail panel toggle column when expanded.
     * @default GridRemoveIcon
     */
    DetailPanelCollapseIcon: React.JSXElementConstructor<any>;
}
/**
 * Grid components React prop interface containing all the overridable components.
 * TODO: Differentiate community and pro interface
 */
interface GridSlotsComponent extends GridIconSlotsComponent {
    /**
     * The custom Checkbox component used in the grid for both header and cells.
     * @default Checkbox
     */
    BaseCheckbox: React.JSXElementConstructor<any>;
    /**
     * The custom TextField component used in the grid.
     * @default TextField
     */
    BaseTextField: React.JSXElementConstructor<any>;
    /**
     * The custom FormControl component used in the grid.
     * @default FormControl
     */
    BaseFormControl: React.JSXElementConstructor<any>;
    /**
     * The custom Select component used in the grid.
     * @default Select
     */
    BaseSelect: React.JSXElementConstructor<any>;
    /**
     * The custom Switch component used in the grid.
     * @default Switch
     */
    BaseSwitch: React.JSXElementConstructor<any>;
    /**
     * The custom Button component used in the grid.
     * @default Button
     */
    BaseButton: React.JSXElementConstructor<any>;
    /**
     * The custom Tooltip component used in the grid.
     * @default Tooltip
     */
    BaseTooltip: React.JSXElementConstructor<any>;
    /**
     * The custom Popper component used in the grid.
     * @default Popper
     */
    BasePopper: React.JSXElementConstructor<any>;
    /**
     * Component rendered for each cell.
     * @default GridCell
     */
    Cell: React.JSXElementConstructor<any>;
    /**
     * Column menu component rendered by clicking on the 3 dots "kebab" icon in column headers.
     * @default GridColumnMenu
     */
    ColumnMenu: React.JSXElementConstructor<any>;
    /**
     * Error overlay component rendered above the grid when an error is caught.
     * @default ErrorOverlay
     */
    ErrorOverlay: React.JSXElementConstructor<any>;
    /**
     * Footer component rendered at the bottom of the grid viewport.
     * @default GridFooter
     */
    Footer: React.JSXElementConstructor<any>;
    /**
     * Header component rendered above the grid column header bar.
     * Prefer using the `Toolbar` slot. You should never need to use this slot.
     * @default GridHeader
     */
    Header: React.JSXElementConstructor<any>;
    /**
     * Toolbar component rendered inside the Header component.
     * @default null
     */
    Toolbar: React.JSXElementConstructor<any> | null;
    /**
     * PreferencesPanel component rendered inside the Header component.
     * @default GridPreferencesPanel
     */
    PreferencesPanel: React.JSXElementConstructor<any>;
    /**
     * Loading overlay component rendered when the grid is in a loading state.
     * @default GridLoadingOverlay
     */
    LoadingOverlay: React.JSXElementConstructor<any>;
    /**
     * No results overlay component rendered when the grid has no results after filtering.
     * @default GridNoResultsOverlay
     */
    NoResultsOverlay: React.JSXElementConstructor<any>;
    /**
     * No rows overlay component rendered when the grid has no rows.
     * @default GridNoRowsOverlay
     */
    NoRowsOverlay: React.JSXElementConstructor<any>;
    /**
     * Pagination component rendered in the grid footer by default.
     * @default Pagination
     */
    Pagination: React.JSXElementConstructor<any> | null;
    /**
     * Filter panel component rendered when clicking the filter button.
     * @default GridFilterPanel
     */
    FilterPanel: React.JSXElementConstructor<any>;
    /**
     * GridColumns panel component rendered when clicking the columns button.
     * @default GridColumnsPanel
     */
    ColumnsPanel: React.JSXElementConstructor<any>;
    /**
     * Panel component wrapping the filters and columns panels.
     * @default GridPanel
     */
    Panel: React.JSXElementConstructor<any>;
    /**
     * Component rendered for each row.
     * @default GridRow
     */
    Row: React.JSXElementConstructor<any>;
}
interface GridClasses {
    /**
     * Styles applied to the root element if `autoHeight={true}`.
     */
    autoHeight: string;
    /**
     * Styles applied to the icon of the boolean cell.
     */
    booleanCell: string;
    /**
     * Styles applied to the cell element if the cell is editable.
     */
    'cell--editable': string;
    /**
     * Styles applied to the cell element if the cell is in edit mode.
     */
    'cell--editing': string;
    /**
     * Styles applied to the cell element if `align="center"`.
     */
    'cell--textCenter': string;
    /**
     * Styles applied to the cell element if `align="left"`.
     */
    'cell--textLeft': string;
    /**
     * Styles applied to the cell element if `align="right"`.
     */
    'cell--textRight': string;
    /**
     * Styles applied to the cell element if the cell has a custom renderer.
     */
    'cell--withRenderer': string;
    /**
     * Styles applied to the cell element.
     */
    cell: string;
    /**
     * Styles applied to the cell checkbox element.
     */
    cellCheckbox: string;
    /**
     * Styles applied to the selection checkbox element.
     */
    checkboxInput: string;
    /**
     * Styles applied to the column header if `headerAlign="center"`.
     */
    'columnHeader--alignCenter': string;
    /**
     * Styles applied to the column header if `headerAlign="left"`.
     */
    'columnHeader--alignLeft': string;
    /**
     * Styles applied to the column header if `headerAlign="right"`.
     */
    'columnHeader--alignRight': string;
    /**
     * Styles applied to the floating column header element when it is dragged.
     */
    'columnHeader--dragging': string;
    /**
     * Styles applied to the column header if it is being dragged.
     */
    'columnHeader--moving': string;
    /**
     * Styles applied to the column header if the type of the column is `number`.
     */
    'columnHeader--numeric': string;
    /**
     * Styles applied to the column header if the column is sortable.
     */
    'columnHeader--sortable': string;
    /**
     * Styles applied to the column header if the column is sorted.
     */
    'columnHeader--sorted': string;
    /**
     * Styles applied to the column header element.
     */
    columnHeader: string;
    /**
     * Styles applied to the header checkbox cell element.
     */
    columnHeaderCheckbox: string;
    /**
     * Styles applied to the column header's draggable container element.
     */
    columnHeaderDraggableContainer: string;
    /**
     * Styles applied to the column headers wrapper if a column is being dragged.
     */
    columnHeaderDropZone: string;
    /**
     * Styles applied to the column header's title element;
     */
    columnHeaderTitle: string;
    /**
     * Styles applied to the column header's title container element.
     */
    columnHeaderTitleContainer: string;
    /**
     * Styles applied to the column headers.
     */
    columnHeaders: string;
    /**
     * Styles applied to the column headers's inner element.
     */
    columnHeadersInner: string;
    /**
     * Styles applied to the column headers's inner element if there is a horizontal scrollbar.
     */
    'columnHeadersInner--scrollable': string;
    /**
     * Styles applied to the column header separator if the column is resizable.
     */
    'columnSeparator--resizable': string;
    /**
     * Styles applied to the column header separator if the column is being resized.
     */
    'columnSeparator--resizing': string;
    /**
     * Styles applied to the column header separator if the side is "left".
     */
    'columnSeparator--sideLeft': string;
    /**
     * Styles applied to the column header separator if the side is "right".
     */
    'columnSeparator--sideRight': string;
    /**
     * Styles applied to the column header separator element.
     */
    columnSeparator: string;
    /**
     * Styles applied to the columns panel element.
     */
    columnsPanel: string;
    /**
     * Styles applied to the columns panel row element.
     */
    columnsPanelRow: string;
    /**
     * Styles applied to the detail panel element.
     */
    detailPanel: string;
    /**
     * Styles applied to the detail panels wrapper element.
     */
    detailPanels: string;
    /**
     * Styles applied to the detail panel toggle cell element.
     */
    detailPanelToggleCell: string;
    /**
     * Styles applied to the detail panel toggle cell element if expanded.
     */
    'detailPanelToggleCell--expanded': string;
    /**
     * Styles applied to the panel element.
     */
    panel: string;
    /**
     * Styles applied to the panel header element.
     */
    panelHeader: string;
    /**
     * Styles applied to the panel wrapper element.
     */
    panelWrapper: string;
    /**
     * Styles applied to the panel content element.
     */
    panelContent: string;
    /**
     * Styles applied to the panel footer element.
     */
    panelFooter: string;
    /**
     * Styles applied to the paper element.
     */
    paper: string;
    /**
     * Styles applied to root of the boolean edit component.
     */
    editBooleanCell: string;
    /**
     * Styles applied to the root of the filter form component.
     */
    filterForm: string;
    /**
     * Styles applied to the delete icon of the filter form component.
     */
    filterFormDeleteIcon: string;
    /**
     * Styles applied to the link operator inout of the filter form component.
     */
    filterFormLinkOperatorInput: string;
    /**
     * Styles applied to the column input of the filter form component.
     */
    filterFormColumnInput: string;
    /**
     * Styles applied to the operator input of the filter form component.
     */
    filterFormOperatorInput: string;
    /**
     * Styles applied to the value input of the filter form component.
     */
    filterFormValueInput: string;
    /**
     * Styles applied to the root of the input component.
     */
    editInputCell: string;
    /**
     * Styles applied to the filter icon element.
     */
    filterIcon: string;
    /**
     * Styles applied to the footer container element.
     */
    footerContainer: string;
    /**
     * Styles applied to the column header icon's container.
     */
    iconButtonContainer: string;
    /**
     * Styles applied to the column header separator icon element.
     */
    iconSeparator: string;
    /**
     * Styles applied to the main container element.
     */
    main: string;
    /**
     * Styles applied to the menu element.
     */
    menu: string;
    /**
     * Styles applied to the menu icon element.
     */
    menuIcon: string;
    /**
     * Styles applied to the menu icon button element.
     */
    menuIconButton: string;
    /**
     * Styles applied to the menu icon element if the menu is open.
     */
    menuOpen: string;
    /**
     * Styles applied to the menu list element.
     */
    menuList: string;
    /**
     * Styles applied to the overlay element.
     */
    overlay: string;
    /**
     * Styles applied to the virtualization container.
     */
    virtualScroller: string;
    /**
     * Styles applied to the virtualization content.
     */
    virtualScrollerContent: string;
    /**
     * Styles applied to the virtualization render zone.
     */
    virtualScrollerRenderZone: string;
    /**
     * Styles applied to the pinned columns.
     */
    pinnedColumns: string;
    /**
     * Styles applied to the left pinned columns.
     */
    'pinnedColumns--left': string;
    /**
     * Styles applied to the right pinned columns.
     */
    'pinnedColumns--right': string;
    /**
     * Styles applied to the pinned column headers.
     */
    pinnedColumnHeaders: string;
    /**
     * Styles applied to the left pinned column headers.
     */
    'pinnedColumnHeaders--left': string;
    /**
     * Styles applied to the right pinned column headers.
     */
    'pinnedColumnHeaders--right': string;
    /**
     * Styles applied to the root element.
     */
    root: string;
    /**
     * Styles applied to the row element if the row is editable.
     */
    'row--editable': string;
    /**
     * Styles applied to the row element if the row is in edit mode.
     */
    'row--editing': string;
    /**
     * Styles applied to the row element.
     */
    row: string;
    /**
     * Styles applied to the footer row count element to show the total number of rows.
     * Only works when pagination is disabled.
     */
    rowCount: string;
    /**
     * Styles applied to both scroll area elements.
     */
    scrollArea: string;
    /**
     * Styles applied to the left scroll area element.
     */
    'scrollArea--left': string;
    /**
     * Styles applied to the right scroll area element.
     */
    'scrollArea--right': string;
    /**
     * Styles applied to the footer selected row count element.
     */
    selectedRowCount: string;
    /**
     * Styles applied to the sort icon element.
     */
    sortIcon: string;
    /**
     * Styles applied to the toolbar container element.
     */
    toolbarContainer: string;
    /**
     * Styles applied to the toolbar filter list element.
     */
    toolbarFilterList: string;
    /**
     * Styles applied to both the cell and the column header if `showColumnRightBorder={true}`.
     */
    withBorder: string;
    /**
     * Styles applied to the root of the grouping column of the tree data.
     */
    treeDataGroupingCell: string;
    /**
     * Styles applied to the toggle of the grouping column of the tree data.
     */
    treeDataGroupingCellToggle: string;
}
declare type GridClassKey = keyof GridClasses;
declare function getDataGridUtilityClass(slot: string): string;
declare const gridClasses: Record<"actionsCell" | "autoHeight" | "booleanCell" | "cell--editable" | "cell--editing" | "cell--textCenter" | "cell--textLeft" | "cell--textRight" | "cell--withRenderer" | "cell" | "cellCheckbox" | "checkboxInput" | "columnHeader--alignCenter" | "columnHeader--alignLeft" | "columnHeader--alignRight" | "columnHeader--dragging" | "columnHeader--moving" | "columnHeader--numeric" | "columnHeader--sortable" | "columnHeader--sorted" | "columnHeader" | "columnHeaderCheckbox" | "columnHeaderDraggableContainer" | "columnHeaderDropZone" | "columnHeaderTitle" | "columnHeaderTitleContainer" | "columnHeaders" | "columnHeadersInner" | "columnHeadersInner--scrollable" | "columnSeparator--resizable" | "columnSeparator--resizing" | "columnSeparator--sideLeft" | "columnSeparator--sideRight" | "columnSeparator" | "columnsPanel" | "columnsPanelRow" | "detailPanel" | "detailPanels" | "detailPanelToggleCell" | "detailPanelToggleCell--expanded" | "panel" | "panelHeader" | "panelWrapper" | "panelContent" | "panelFooter" | "paper" | "editBooleanCell" | "editInputCell" | "filterForm" | "filterFormDeleteIcon" | "filterFormLinkOperatorInput" | "filterFormColumnInput" | "filterFormOperatorInput" | "filterFormValueInput" | "filterIcon" | "footerContainer" | "iconButtonContainer" | "iconSeparator" | "main" | "menu" | "menuIcon" | "menuIconButton" | "menuOpen" | "menuList" | "overlay" | "root" | "row--editable" | "row--editing" | "row" | "rowCount" | "scrollArea--left" | "scrollArea--right" | "scrollArea" | "selectedRowCount" | "sortIcon" | "toolbarContainer" | "toolbarFilterList" | "virtualScroller" | "virtualScrollerContent" | "virtualScrollerRenderZone" | "pinnedColumns" | "pinnedColumns--left" | "pinnedColumns--right" | "pinnedColumnHeaders" | "pinnedColumnHeaders--left" | "pinnedColumnHeaders--right" | "withBorder" | "treeDataGroupingCell" | "treeDataGroupingCellToggle" | "groupingCriteriaCell" | "groupingCriteriaCellToggle", string>;
/**
 * Overrideable components props dynamically passed to the component at rendering.
 */
interface GridSlotsComponentsProps {
    baseCheckbox?: any;
    baseTextField?: any;
    baseFormControl?: any;
    baseSelect?: any;
    baseSwitch?: any;
    baseButton?: any;
    basePopper?: any;
    baseTooltip?: any;
    cell?: any;
    columnMenu?: any;
    columnsPanel?: any;
    errorOverlay?: any;
    filterPanel?: any;
    footer?: any;
    header?: any;
    loadingOverlay?: any;
    noResultsOverlay?: any;
    noRowsOverlay?: any;
    pagination?: any;
    panel?: any;
    preferencesPanel?: any;
    row?: any;
    toolbar?: any;
}
interface GridExperimentalFeatures {
    /**
     * Will be part of the premium-plan when fully ready.
     */
    preventCommitWhileValidating: boolean;
}
/**
 * The props users can give to the `DataGrid` component.
 */
declare type DataGridProps = Omit<Partial<DataGridPropsWithDefaultValues> & DataGridPropsWithComplexDefaultValueBeforeProcessing & DataGridPropsWithoutDefaultValue, DataGridForcedPropsKey> & {
    pagination?: true;
};
/**
 * The props of the `DataGrid` component after the pre-processing phase.
 */
interface DataGridProcessedProps extends DataGridPropsWithDefaultValues, DataGridPropsWithComplexDefaultValueAfterProcessing, DataGridPropsWithoutDefaultValue {
}
/**
 * The props of the `DataGrid` component after the pre-processing phase that the user should not be able to override.
 * Those are usually used in feature-hook for which the pro-plan has more advanced features (eg: multi-sorting, multi-filtering, ...).
 */
declare type DataGridForcedPropsKey = 'apiRef' | 'checkboxSelectionVisibleOnly' | 'disableMultipleColumnsFiltering' | 'disableMultipleColumnsSorting' | 'disableMultipleSelection' | 'disableColumnReorder' | 'disableColumnResize' | 'throttleRowsMs' | 'hideFooterRowCount' | 'pagination' | 'signature';
/**
 * The `DataGrid` options with a default value that must be merged with the value given through props.
 */
interface DataGridPropsWithComplexDefaultValueAfterProcessing {
    components: GridSlotsComponent;
    localeText: GridLocaleText;
}
/**
 * The `DataGrid` options with a default value that must be merged with the value given through props.
 */
interface DataGridPropsWithComplexDefaultValueBeforeProcessing {
    /**
     * Overrideable components.
     */
    components?: Partial<GridSlotsComponent>;
    /**
     * Set the locale text of the grid.
     * You can find all the translation keys supported in [the source](https://github.com/mui/mui-x/blob/HEAD/packages/grid/_modules_/grid/constants/localeTextConstants.ts) in the GitHub repository.
     */
    localeText?: Partial<GridLocaleText>;
}
/**
 * The `DataGrid` options with a default value overridable through props
 * None of the entry of this interface should be optional, they all have default values and `DataGridProps` already applies a `Partial<DataGridSimpleOptions>` for the public interface
 * The controlled model do not have a default value at the prop processing level, so they must be defined in `DataGridOtherProps`
 * TODO: add multiSortKey
 */
interface DataGridPropsWithDefaultValues {
    /**
     * If `true`, the grid height is dynamic and follow the number of rows in the grid.
     * @default false
     */
    autoHeight: boolean;
    /**
     * If `true`, the pageSize is calculated according to the container size and the max number of rows to avoid rendering a vertical scroll bar.
     * @default false
     */
    autoPageSize: boolean;
    /**
     * If `true`, the grid get a first column with a checkbox that allows to select rows.
     * @default false
     */
    checkboxSelection: boolean;
    /**
     * If `true`, the "Select All" header checkbox selects only the rows on the current page. To be used in combination with `checkboxSelection`.
     * It only works if the pagination is enabled.
     * @default false
     */
    checkboxSelectionVisibleOnly: boolean;
    /**
     * Number of extra columns to be rendered before/after the visible slice.
     * @default 3
     */
    columnBuffer: number;
    /**
     * Number of extra rows to be rendered before/after the visible slice.
     * @default 3
     */
    rowBuffer: number;
    /**
     * Number of rows from the `rowBuffer` that can be visible before a new slice is rendered.
     * @default 3
     */
    rowThreshold: number;
    /**
     * Number of rows from the `columnBuffer` that can be visible before a new slice is rendered.
     * @default 3
     */
    columnThreshold: number;
    /**
     * Set the density of the grid.
     * @default "standard"
     */
    density: GridDensity;
    /**
     * If `true`, rows will not be extended to fill the full width of the grid container.
     * @default false
     */
    disableExtendRowFullWidth: boolean;
    /**
     * If `true`, column filters are disabled.
     * @default false
     */
    disableColumnFilter: boolean;
    /**
     * If `true`, the column menu is disabled.
     * @default false
     */
    disableColumnMenu: boolean;
    /**
     * If `true`, hiding/showing columns is disabled.
     * @default false
     */
    disableColumnSelector: boolean;
    /**
     * If `true`, the density selector is disabled.
     * @default false
     */
    disableDensitySelector: boolean;
    /**
     * If `true`, filtering with multiple columns is disabled.
     * @default false
     */
    disableMultipleColumnsFiltering: boolean;
    /**
     * If `true`, multiple selection using the CTRL or CMD key is disabled.
     * @default false
     */
    disableMultipleSelection: boolean;
    /**
     * If `true`, sorting with multiple columns is disabled.
     * @default false
     */
    disableMultipleColumnsSorting: boolean;
    /**
     * If `true`, the selection on click on a row or cell is disabled.
     * @default false
     */
    disableSelectionOnClick: boolean;
    /**
     * If `true`, the virtualization is disabled.
     * @default false
     */
    disableVirtualization: boolean;
    /**
     * Controls whether to use the cell or row editing.
     * @default "cell"
     */
    editMode: GridEditMode;
    /**
     * Filtering can be processed on the server or client-side.
     * Set it to 'server' if you would like to handle filtering on the server-side.
     * @default "client"
     */
    filterMode: GridFeatureMode;
    /**
     * Set the height in pixel of the column headers in the grid.
     * @default 56
     */
    headerHeight: number;
    /**
     * If `true`, the footer component is hidden.
     * @default false
     */
    hideFooter: boolean;
    /**
     * If `true`, the pagination component in the footer is hidden.
     * @default false
     */
    hideFooterPagination: boolean;
    /**
     * If `true`, the row count in the footer is hidden.
     * It has no effect if the pagination is enabled.
     * @default false
     */
    hideFooterRowCount: boolean;
    /**
     * If `true`, the selected row count in the footer is hidden.
     * @default false
     */
    hideFooterSelectedRowCount: boolean;
    /**
     * Pass a custom logger in the components that implements the [[Logger]] interface.
     * @default console
     */
    logger: Logger;
    /**
     * Allows to pass the logging level or false to turn off logging.
     * @default "debug"
     */
    logLevel: keyof Logger | false;
    /**
     * If `true`, pagination is enabled.
     * @default false
     */
    pagination: boolean;
    /**
     * Pagination can be processed on the server or client-side.
     * Set it to 'client' if you would like to handle the pagination on the client-side.
     * Set it to 'server' if you would like to handle the pagination on the server-side.
     * @default "client"
     */
    paginationMode: GridFeatureMode;
    /**
     * Set the height in pixel of a row in the grid.
     * @default 52
     */
    rowHeight: number;
    /**
     * Select the pageSize dynamically using the component UI.
     * @default [25, 50, 100]
     */
    rowsPerPageOptions: number[];
    /**
     * If `true`, the right border of the cells are displayed.
     * @default false
     */
    showCellRightBorder: boolean;
    /**
     * If `true`, the right border of the column headers are displayed.
     * @default false
     */
    showColumnRightBorder: boolean;
    /**
     * The order of the sorting sequence.
     * @default ['asc', 'desc', null]
     */
    sortingOrder: GridSortDirection[];
    /**
     * Sorting can be processed on the server or client-side.
     * Set it to 'client' if you would like to handle sorting on the client-side.
     * Set it to 'server' if you would like to handle sorting on the server-side.
     * @default "client"
     */
    sortingMode: GridFeatureMode;
    /**
     * If positive, the Grid will throttle updates coming from `apiRef.current.updateRows` and `apiRef.current.setRows`.
     * It can be useful if you have a high update rate but do not want to do heavy work like filtering / sorting or rendering on each  individual update.
     * @default 0
     */
    throttleRowsMs: number;
    /**
     * If `true`, reordering columns is disabled.
     * @default false
     */
    disableColumnReorder: boolean;
    /**
     * If `true`, resizing columns is disabled.
     * @default false
     */
    disableColumnResize: boolean;
}
/**
 * The `DataGrid` props with no default value.
 */
interface DataGridPropsWithoutDefaultValue extends CommonProps {
    /**
     * The ref object that allows grid manipulation. Can be instantiated with [[useGridApiRef()]].
     */
    apiRef?: GridApiRef;
    /**
     * Signal to the underlying logic what version of the public component API
     * of the data grid is exposed [[GridSignature]].
     * @internal
     */
    signature?: string;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<GridClasses>;
    /**
     * Extend native column types with your new column types.
     */
    columnTypes?: GridColumnTypesRecord;
    /**
     * Set the total number of rows, if it is different than the length of the value `rows` prop.
     * If some of the rows have children (for instance in the tree data), this number represents the amount of top level rows.
     */
    rowCount?: number;
    /**
     * Override the height/width of the grid inner scrollbar.
     */
    scrollbarSize?: number;
    /**
     * Function that applies CSS classes dynamically on cells.
     * @param {GridCellParams} params With all properties from [[GridCellParams]].
     * @returns {string} The CSS class to apply to the cell.
     */
    getCellClassName?: (params: GridCellParams) => string;
    /**
     * Function that applies CSS classes dynamically on rows.
     * @param {GridRowParams} params With all properties from [[GridRowParams]].
     * @returns {string} The CSS class to apply to the row.
     */
    getRowClassName?: (params: GridRowParams) => string;
    /**
     * Function that sets the row height per row.
     * @param {GridRowHeightParams} params With all properties from [[GridRowHeightParams]].
     * @returns {GridRowHeightReturnValue} The row height value. If `null` or `undefined` then the default row height is applied.
     */
    getRowHeight?: (params: GridRowHeightParams) => GridRowHeightReturnValue;
    /**
     * Function that returns the element to render in row detail.
     * @param {GridRowParams} params With all properties from [[GridRowParams]].
     * @returns {JSX.Element} The row detail element.
     */
    getDetailPanelContent?: (params: GridRowParams) => React.ReactNode;
    /**
     * Callback fired when a cell is rendered, returns true if the cell is editable.
     * @param {GridCellParams} params With all properties from [[GridCellParams]].
     * @returns {boolean} A boolean indicating if the cell is editable.
     */
    isCellEditable?: (params: GridCellParams) => boolean;
    /**
     * Determines if a row can be selected.
     * @param {GridRowParams} params With all properties from [[GridRowParams]].
     * @returns {boolean} A boolean indicating if the cell is selectable.
     */
    isRowSelectable?: (params: GridRowParams) => boolean;
    /**
     * Callback fired when the edit cell value changes.
     * @param {GridEditCellPropsParams} params With all properties from [[GridEditCellPropsParams]].
     * @param {MuiEvent<React.SyntheticEvent>} event The event that caused this prop to be called.
     * @param {GridCallbackDetails} details Additional details for this callback.
     * @deprecated use `preProcessEditCellProps` from the [`GridColDef`](/api/data-grid/grid-col-def/)
     */
    onEditCellPropsChange?: GridEventListener<GridEvents.editCellPropsChange>;
    /**
     * Callback fired when the cell changes are committed.
     * @param {GridCellEditCommitParams} params With all properties from [[GridCellEditCommitParams]].
     * @param {MuiEvent<MuiBaseEvent>} event The event that caused this prop to be called.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onCellEditCommit?: GridEventListener<GridEvents.cellEditCommit>;
    /**
     * Callback fired when the cell turns to edit mode.
     * @param {GridCellParams} params With all properties from [[GridCellParams]].
     * @param {MuiEvent<React.KeyboardEvent | React.MouseEvent>} event The event that caused this prop to be called.
     */
    onCellEditStart?: GridEventListener<GridEvents.cellEditStart>;
    /**
     * Callback fired when the cell turns to view mode.
     * @param {GridCellParams} params With all properties from [[GridCellParams]].
     * @param {MuiEvent<MuiBaseEvent>} event The event that caused this prop to be called.
     */
    onCellEditStop?: GridEventListener<GridEvents.cellEditStop>;
    /**
     * Callback fired when the row changes are committed.
     * @param {GridRowId} id The row id.
     * @param {MuiEvent<MuiBaseEvent>} event The event that caused this prop to be called.
     */
    onRowEditCommit?: GridEventListener<GridEvents.rowEditCommit>;
    /**
     * Callback fired when the row turns to edit mode.
     * @param {GridRowParams} params With all properties from [[GridRowParams]].
     * @param {MuiEvent<React.KeyboardEvent | React.MouseEvent>} event The event that caused this prop to be called.
     */
    onRowEditStart?: GridEventListener<GridEvents.rowEditStart>;
    /**
     * Callback fired when the row turns to view mode.
     * @param {GridRowParams} params With all properties from [[GridRowParams]].
     * @param {MuiEvent<MuiBaseEvent>} event The event that caused this prop to be called.
     */
    onRowEditStop?: GridEventListener<GridEvents.rowEditStop>;
    /**
     * Callback fired when an exception is thrown in the grid.
     * @param {any} args The arguments passed to the `showError` call.
     * @param {MuiEvent<{}>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onError?: GridEventListener<GridEvents.componentError>;
    /**
     * Callback fired when a click event comes from a cell element.
     * @param {GridCellParams} params With all properties from [[GridCellParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onCellClick?: GridEventListener<GridEvents.cellClick>;
    /**
     * Callback fired when a double click event comes from a cell element.
     * @param {GridCellParams} params With all properties from [[GridCellParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onCellDoubleClick?: GridEventListener<GridEvents.cellDoubleClick>;
    /**
     * Callback fired when a cell loses focus.
     * @param {GridCellParams} params With all properties from [[GridCellParams]].
     * @param {MuiEvent<MuiBaseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onCellFocusOut?: GridEventListener<GridEvents.cellFocusOut>;
    /**
     * Callback fired when a keydown event comes from a cell element.
     * @param {GridCellParams} params With all properties from [[GridCellParams]].
     * @param {MuiEvent<React.KeyboardEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onCellKeyDown?: GridEventListener<GridEvents.cellKeyDown>;
    /**
     * Callback fired when a click event comes from a column header element.
     * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnHeaderClick?: GridEventListener<GridEvents.columnHeaderClick>;
    /**
     * Callback fired when a double click event comes from a column header element.
     * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnHeaderDoubleClick?: GridEventListener<GridEvents.columnHeaderDoubleClick>;
    /**
     * Callback fired when a mouseover event comes from a column header element.
     * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnHeaderOver?: GridEventListener<GridEvents.columnHeaderOver>;
    /**
     * Callback fired when a mouseout event comes from a column header element.
     * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnHeaderOut?: GridEventListener<GridEvents.columnHeaderOut>;
    /**
     * Callback fired when a mouse enter event comes from a column header element.
     * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnHeaderEnter?: GridEventListener<GridEvents.columnHeaderEnter>;
    /**
     * Callback fired when a mouse leave event comes from a column header element.
     * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnHeaderLeave?: GridEventListener<GridEvents.columnHeaderLeave>;
    /**
     * Callback fired when a column is reordered.
     * @param {GridColumnOrderChangeParams} params With all properties from [[GridColumnOrderChangeParams]].
     * @param {MuiEvent<{}>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnOrderChange?: GridEventListener<GridEvents.columnOrderChange>;
    /**
     * Callback fired when a column visibility changes.
     * Only works when no `columnVisibilityModel` is provided and if we change the visibility of a single column at a time.
     * @param {GridColumnVisibilityChangeParams} params With all properties from [[GridColumnVisibilityChangeParams]].
     * @param {MuiEvent<{}>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     * @deprecated Use `onColumnVisibilityModelChange` instead.
     */
    onColumnVisibilityChange?: GridEventListener<GridEvents.columnVisibilityChange>;
    /**
     * Callback fired when a click event comes from a row container element.
     * @param {GridRowParams} params With all properties from [[GridRowParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onRowClick?: GridEventListener<GridEvents.rowClick>;
    /**
     * Callback fired when a double click event comes from a row container element.
     * @param {GridRowParams} params With all properties from [[RowParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onRowDoubleClick?: GridEventListener<GridEvents.rowDoubleClick>;
    /**
     * Callback fired when the grid is resized.
     * @param {ElementSize} containerSize With all properties from [[ElementSize]].
     * @param {MuiEvent<{}>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onResize?: GridEventListener<GridEvents.debouncedResize>;
    /**
     * Callback fired when the state of the grid is updated.
     * @param {GridState} state The new state.
     * @param {MuiEvent<{}>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     * @internal
     */
    onStateChange?: GridEventListener<GridEvents.stateChange>;
    /**
     * The zero-based index of the current page.
     * @default 0
     */
    page?: number;
    /**
     * Callback fired when the current page has changed.
     * @param {number} page Index of the page displayed on the Grid.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onPageChange?: (page: number, details: GridCallbackDetails) => void;
    /**
     * Set the number of rows in one page.
     * If some of the rows have children (for instance in the tree data), this number represents the amount of top level rows wanted on each page.
     * @default 100
     */
    pageSize?: number;
    /**
     * Callback fired when the page size has changed.
     * @param {number} pageSize Size of the page displayed on the Grid.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onPageSizeChange?: (pageSize: number, details: GridCallbackDetails) => void;
    /**
     * Set the edit rows model of the grid.
     */
    editRowsModel?: GridEditRowsModel;
    /**
     * Callback fired when the `editRowsModel` changes.
     * @param {GridEditRowsModel} editRowsModel With all properties from [[GridEditRowsModel]].
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onEditRowsModelChange?: (editRowsModel: GridEditRowsModel, details: GridCallbackDetails) => void;
    /**
     * Set the filter model of the grid.
     */
    filterModel?: GridFilterModel;
    /**
     * Callback fired when the Filter model changes before the filters are applied.
     * @param {GridFilterModel} model With all properties from [[GridFilterModel]].
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onFilterModelChange?: (model: GridFilterModel, details: GridCallbackDetails) => void;
    /**
     * Set the selection model of the grid.
     */
    selectionModel?: GridInputSelectionModel;
    /**
     * Callback fired when the selection state of one or multiple rows changes.
     * @param {GridSelectionModel} selectionModel With all the row ids [[GridSelectionModel]].
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onSelectionModelChange?: (selectionModel: GridSelectionModel, details: GridCallbackDetails) => void;
    /**
     * Set the column visibility model of the grid.
     * If defined, the grid will ignore the `hide` property in [[GridColDef]].
     */
    columnVisibilityModel?: GridColumnVisibilityModel;
    /**
     * Callback fired when the column visibility model changes.
     * @param {GridColumnVisibilityModel} model The new model.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnVisibilityModelChange?: (model: GridColumnVisibilityModel, details: GridCallbackDetails) => void;
    /**
     * Set the sort model of the grid.
     */
    sortModel?: GridSortModel;
    /**
     * Callback fired when the sort model changes before a column is sorted.
     * @param {GridSortModel} model With all properties from [[GridSortModel]].
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onSortModelChange?: (model: GridSortModel, details: GridCallbackDetails) => void;
    /**
     * The label of the grid.
     */
    'aria-label'?: string;
    /**
     * The id of the element containing a label for the grid.
     */
    'aria-labelledby'?: string;
    /**
     * Set of columns of type [[GridColumns]].
     */
    columns: GridColumns;
    /**
     * An error that will turn the grid into its error state and display the error component.
     */
    error?: any;
    /**
     * Return the id of a given [[GridRowModel]].
     */
    getRowId?: GridRowIdGetter;
    /**
     * If `true`, a  loading overlay is displayed.
     */
    loading?: boolean;
    /**
     * Nonce of the inline styles for [Content Security Policy](https://www.w3.org/TR/2016/REC-CSP2-20161215/#script-src-the-nonce-attribute).
     */
    nonce?: string;
    /**
     * Set of rows of type [[GridRowsProp]].
     */
    rows: GridRowsProp;
    /**
     * The initial state of the DataGrid.
     * The data in it will be set in the state on initialization but will not be controlled.
     * If one of the data in `initialState` is also being controlled, then the control state wins.
     */
    initialState?: GridInitialState;
    /**
     * Overrideable components props dynamically passed to the component at rendering.
     */
    componentsProps?: GridSlotsComponentsProps;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * Features under development.
     * For each feature, if the flag is not explicitly set to `true`, the feature will be fully disabled and any property / method call will not have any effect.
     */
    experimentalFeatures?: Partial<GridExperimentalFeatures>;
}
/**
 * The props of the `DataGridPro` component after the pre-processing phase.
 */
interface DataGridProProcessedProps extends DataGridProPropsWithDefaultValue, DataGridPropsWithComplexDefaultValueAfterProcessing, DataGridProPropsWithoutDefaultValue {
}
/**
 * The `DataGridPro` options with a default value overridable through props
 * None of the entry of this interface should be optional, they all have default values and `DataGridProps` already applies a `Partial<DataGridSimpleOptions>` for the public interface
 * The controlled model do not have a default value at the prop processing level, so they must be defined in `DataGridOtherProps`
 */
interface DataGridProPropsWithDefaultValue extends DataGridPropsWithDefaultValues {
    /**
     * Set the area in `px` at the bottom of the grid viewport where onRowsScrollEnd is called.
     * @default 80
     */
    scrollEndThreshold: number;
    /**
     * If `true`, the rows will be gathered in a tree structure according to the `getTreeDataPath` prop.
     * @default false
     */
    treeData: boolean;
    /**
     * If above 0, the row children will be expanded up to this depth.
     * If equal to -1, all the row children will be expanded.
     * @default 0
     */
    defaultGroupingExpansionDepth: number;
    /**
     * Determines if a group should be expanded after its creation.
     * This prop takes priority over the `defaultGroupingExpansionDepth` prop.
     * @param {GridRowTreeNodeConfig} node The node of the group to test.
     * @returns {boolean} A boolean indicating if the group is expanded.
     */
    isGroupExpandedByDefault?: (node: GridRowTreeNodeConfig) => boolean;
    /**
     * If `true`, the column pinning is disabled.
     * @default false
     */
    disableColumnPinning: boolean;
    /**
     * If `true`, the filtering will only be applied to the top level rows when grouping rows with the `treeData` prop.
     * @default false
     */
    disableChildrenFiltering: boolean;
    /**
     * If `true`, the sorting will only be applied to the top level rows when grouping rows with the `treeData` prop.
     * @default false
     */
    disableChildrenSorting: boolean;
    /**
     * If `true`, the row grouping is disabled.
     * @default false
     */
    disableRowGrouping: boolean;
    /**
     * If `single`, all column we are grouping by will be represented in the same grouping the same column.
     * If `multiple`, each column we are grouping by will be represented in its own column.
     * @default 'single'
     */
    rowGroupingColumnMode: 'single' | 'multiple';
    /**
     * Function that returns the height of the row detail panel.
     * @param {GridRowParams} params With all properties from [[GridRowParams]].
     * @returns {number} The height in pixels.
     * @default "() => 500"
     */
    getDetailPanelHeight: (params: GridRowParams) => number;
}
interface DataGridProPropsWithoutDefaultValue extends DataGridPropsWithoutDefaultValue {
    /**
     * Determines the path of a row in the tree data.
     * For instance, a row with the path ["A", "B"] is the child of the row with the path ["A"].
     * Note that all paths must contain at least one element.
     * @param {GridRowModel} row The row from which we want the path.
     * @returns {string[]} The path to the row.
     */
    getTreeDataPath?: (row: GridRowModel) => string[];
    /**
     * Callback fired while a column is being resized.
     * @param {GridColumnResizeParams} params With all properties from [[GridColumnResizeParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnResize?: GridEventListener<GridEvents.columnResize>;
    /**
     * Callback fired when the width of a column is changed.
     * @param {GridColumnResizeParams} params With all properties from [[GridColumnResizeParams]].
     * @param {MuiEvent<React.MouseEvent>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onColumnWidthChange?: GridEventListener<GridEvents.columnWidthChange>;
    /**
     * Callback fired when scrolling to the bottom of the grid viewport.
     * @param {GridRowScrollEndParams} params With all properties from [[GridRowScrollEndParams]].
     * @param {MuiEvent<{}>} event The event object.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onRowsScrollEnd?: GridEventListener<GridEvents.rowsScrollEnd>;
    /**
     * The column fields to display pinned to left or right.
     */
    pinnedColumns?: GridPinnedColumns;
    /**
     * Callback fired when the pinned columns have changed.
     * @param {GridPinnedColumns} pinnedColumns The changed pinned columns.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onPinnedColumnsChange?: (pinnedColumns: GridPinnedColumns, details: GridCallbackDetails) => void;
    /**
     * Set the row grouping model of the grid.
     */
    rowGroupingModel?: GridRowGroupingModel;
    /**
     * Callback fired when the row grouping model changes.
     * @param {GridRowGroupingModel} model Columns used as grouping criteria.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onRowGroupingModelChange?: (model: GridRowGroupingModel, details: GridCallbackDetails) => void;
    /**
     * The grouping column used by the tree data.
     */
    groupingColDef?: GridGroupingColDefOverride | ((params: GridGroupingColDefOverrideParams) => GridGroupingColDefOverride | undefined | null);
    /**
     * The row ids to show the detail panel.
     */
    detailPanelExpandedRowIds?: GridRowId[];
    /**
     * Callback fired when the detail panel of a row is opened or closed.
     * @param {GridRowId[]} ids The ids of the rows which have the detail panel open.
     * @param {GridCallbackDetails} details Additional details for this callback.
     */
    onDetailPanelExpandedRowIdsChange?: (ids: GridRowId[], details: GridCallbackDetails) => void;
    /**
     * Function that returns the element to render in row detail.
     * @param {GridRowParams} params With all properties from [[GridRowParams]].
     * @returns {JSX.Element} The row detail element.
     */
    getDetailPanelContent?: (params: GridRowParams) => React.ReactNode;
}
declare const GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD = "__row_group_by_columns_group__";
declare const getRowGroupingFieldFromGroupingCriteria: (groupingCriteria: string | null) => string;
interface GridPinnedColumns {
    left?: string[];
    right?: string[];
}
declare enum GridPinnedPosition {
    left = "left",
    right = "right"
}
/**
 * The column pinning API interface that is available in the grid [[apiRef]].
 */
interface GridColumnPinningApi {
    /**
     * Pins a column to the left or right side of the grid.
     * @param {string} field The column field to pin.
     * @param {GridPinnedPosition} side Which side to pin the column.
     */
    pinColumn: (field: string, side: GridPinnedPosition) => void;
    /**
     * Unpins a column.
     * @param {string} field The column field to unpin.
     */
    unpinColumn: (field: string) => void;
    /**
     * Returns which columns are pinned.
     * @returns {GridPinnedColumns} An object containing the pinned columns.
     */
    getPinnedColumns: () => GridPinnedColumns;
    /**
     * Changes the pinned columns.
     * @param {GridPinnedColumns} pinnedColumns An object containing the columns to pin.
     */
    setPinnedColumns: (pinnedColumns: GridPinnedColumns) => void;
    /**
     * Returns which side a column is pinned to.
     * @param {string} field The column field to check.
     * @returns {string | false} Which side the column is pinned or `false` if not pinned.
     */
    isColumnPinned: (field: string) => GridPinnedPosition | false;
}
declare type GridColumnPinningState = GridPinnedColumns;
/**
 * The grid rows total height and row possitions.
 */
interface GridRowsMetaState {
    /**
     * The sum of of all visible grid rows in the current rows.
     */
    currentPageTotalHeight: number;
    /**
     * The grid rows possitions.
     */
    positions: number[];
}
interface GridDetailPanelState {
    expandedRowIds: GridRowId[];
    contentCache: Record<GridRowId, React.ReactNode>;
    heightCache: Record<GridRowId, number>;
}
declare type GridDetailPanelInitialState = Pick<GridDetailPanelState, 'expandedRowIds'>;
/**
 * TODO: Distinguish pro and community states
 */
interface GridState {
    rows: GridRowsState;
    rowsMeta: GridRowsMetaState;
    editRows: GridEditRowsModel;
    pagination: GridPaginationState;
    columns: GridColumnsState;
    columnReorder: GridColumnReorderState;
    columnResize: GridColumnResizeState;
    columnMenu: GridColumnMenuState;
    sorting: GridSortingState;
    focus: GridFocusState;
    tabIndex: GridTabIndexState;
    selection: GridSelectionModel;
    filter: GridFilterState;
    preferencePanel: GridPreferencePanelState;
    density: GridDensityState;
    rowGrouping: GridRowGroupingState;
    error?: any;
    pinnedColumns: GridColumnPinningState;
    detailPanel: GridDetailPanelState;
}
interface GridInitialState {
    pagination?: GridPaginationInitialState;
    sorting?: GridSortingInitialState;
    filter?: GridFilterInitialState;
    columns?: GridColumnsInitialState;
    preferencePanel?: GridPreferencePanelInitialState;
    rowGrouping?: GridRowGroupingInitialState;
    pinnedColumns?: GridColumnPinningState;
    detailPanel?: GridDetailPanelInitialState;
}
interface GridStateChangeParams {
    state: GridState;
    api: GridApi;
}
interface GridRowSelectionCheckboxParams {
    value: boolean;
    id: GridRowId;
}
interface GridHeaderSelectionCheckboxParams {
    value: boolean;
}
/**
 * Object passed as parameter of the valueOptions function for singleSelect column.
 */
interface GridValueOptionsParams {
    /**
     * The field of the column to which options will be provided
     */
    field: string;
    /**
     * The grid row id.
     */
    id?: GridRowId;
    /**
     * The row model of the row that the current cell belongs to.
     */
    row?: GridRowModel;
}
/**
 * The size of a container.
 */
interface ElementSize {
    /**
     * The height of a container or HTMLElement.
     */
    height: number;
    /**
     * The width of a container or HTMLElement.
     */
    width: number;
}
interface GridStatePersistenceApi {
    /**
     * Generates a serializable object containing the exportable parts of the DataGrid state.
     * These values can then be passed to the `initialState` prop or injected using the `restoreState` method.
     * @returns {GridInitialState} The exported state.
     */
    exportState: () => GridInitialState;
    /**
     * Inject the given values into the state of the DataGrid.
     * @param {GridInitialState} stateToRestore The exported state to restore.
     */
    restoreState: (stateToRestore: GridInitialState) => void;
}
interface GridRestoreStatePreProcessingValue {
    /**
     * Functions to run after the state has been updated but before re-rendering.
     * This is usually used to apply derived states like `applyFilters` or `applySorting`
     */
    callbacks: (() => void)[];
}
interface GridRestoreStatePreProcessingContext {
    stateToRestore: GridInitialState;
}
declare type PreProcessorCallback = (value: any, params?: any) => any;
declare type GridPreProcessingGroup = keyof GridPreProcessingGroupLookup;
interface GridPreProcessingGroupLookup {
    hydrateColumns: {
        value: Omit<GridColumnsRawState, 'columnVisibilityModel'>;
    };
    scrollToIndexes: {
        value: Partial<GridScrollParams>;
        context: Partial<GridCellIndexCoordinates>;
    };
    columnMenu: {
        value: JSX.Element[];
        context: GridColDef;
    };
    canBeReordered: {
        value: boolean;
        context: GridCanBeReorderedPreProcessingContext;
    };
    filteringMethod: {
        value: GridFilteringMethodCollection;
    };
    sortingMethod: {
        value: GridSortingMethodCollection;
    };
    exportState: {
        value: GridInitialState;
    };
    restoreState: {
        value: GridRestoreStatePreProcessingValue;
        context: GridRestoreStatePreProcessingContext;
    };
    rowHeight: {
        value: Record<string, number>;
        context: GridRowEntry;
    };
}
declare type GridPreProcessorsApplierArg<P extends GridPreProcessingGroup, T extends {
    value: any;
}> = T extends {
    context: any;
} ? [P, T['value'], T['context']] : [P, T['value']];
declare type GridPreProcessorsApplier = <P extends GridPreProcessingGroup>(...params: GridPreProcessorsApplierArg<P, GridPreProcessingGroupLookup[P]>) => GridPreProcessingGroupLookup[P]['value'];
interface GridPreProcessingApi {
    /**
     * Register a pre-processor and emit an event to notify the agents to re-apply the pre-processors.
     * @param {GridPreProcessingGroup} group The name of the group to bind this pre-processor to.
     * @param {number} id An unique and static identifier of the pre-processor.
     * @param {PreProcessorCallback} callback The pre-processor to register.
     * @returns {() => void} A function to unregister the pre-processor.
     * @ignore - do not document.
     */
    unstable_registerPreProcessor: (group: GridPreProcessingGroup, id: string, callback: PreProcessorCallback) => () => void;
    /**
     * Apply on the value the pre-processors registered on the given group.
     * @param {GridPreProcessingGroup} group The name of the processing group.
     * @param {any} value The value to pass to the first pre-processor.
     * @param {any} params Additional params to pass to the pre-processors.
     * @returns {any} The value after passing through all pre-processors.
     * @ignore - do not document.
     */
    unstable_applyPreProcessors: GridPreProcessorsApplier;
}
interface GridRowEventLookup {
    rowClick: {
        params: GridRowParams;
        event: React.MouseEvent<HTMLElement>;
    };
    rowDoubleClick: {
        params: GridRowParams;
        event: React.MouseEvent<HTMLElement>;
    };
    rowMouseEnter: {
        params: GridRowParams;
        event: React.MouseEvent<HTMLElement>;
    };
    rowMouseLeave: {
        params: GridRowParams;
        event: React.MouseEvent<HTMLElement>;
    };
}
interface GridColumnHeaderEventLookup {
    columnHeaderClick: {
        params: GridColumnHeaderParams;
        event: React.MouseEvent<HTMLElement>;
    };
    columnHeaderDoubleClick: {
        params: GridColumnHeaderParams;
        event: React.MouseEvent<HTMLElement>;
    };
    columnHeaderOver: {
        params: GridColumnHeaderParams;
        event: React.MouseEvent<HTMLElement>;
    };
    columnHeaderOut: {
        params: GridColumnHeaderParams;
        event: React.MouseEvent<HTMLElement>;
    };
    columnHeaderEnter: {
        params: GridColumnHeaderParams;
        event: React.MouseEvent<HTMLElement>;
    };
    columnHeaderLeave: {
        params: GridColumnHeaderParams;
        event: React.MouseEvent<HTMLElement>;
    };
    columnHeaderKeyDown: {
        params: GridColumnHeaderParams;
        event: React.KeyboardEvent<HTMLElement>;
    };
    columnHeaderFocus: {
        params: GridColumnHeaderParams;
        event: React.FocusEvent<HTMLElement>;
    };
    columnHeaderBlur: {
        params: GridColumnHeaderParams;
        event: React.FocusEvent<HTMLElement>;
    };
    columnHeaderDragStart: {
        params: GridColumnHeaderParams;
        event: React.DragEvent<HTMLElement>;
    };
    columnHeaderDragEnter: {
        params: GridColumnHeaderParams;
        event: React.DragEvent<HTMLElement>;
    };
    columnHeaderDragOver: {
        params: GridColumnHeaderParams;
        event: React.DragEvent<HTMLElement>;
    };
    columnHeaderDragEnd: {
        params: GridColumnHeaderParams;
        event: React.DragEvent<HTMLElement>;
    };
    columnSeparatorMouseDown: {
        params: GridColumnHeaderParams;
        event: React.MouseEvent<HTMLElement>;
    };
}
interface GridCellEventLookup {
    cellClick: {
        params: GridCellParams;
        event: React.MouseEvent<HTMLElement>;
    };
    cellDoubleClick: {
        params: GridCellParams;
        event: React.MouseEvent<HTMLElement>;
    };
    cellMouseDown: {
        params: GridCellParams;
        event: React.MouseEvent<HTMLElement>;
    };
    cellMouseUp: {
        params: GridCellParams;
        event: React.MouseEvent<HTMLElement>;
    };
    cellKeyDown: {
        params: GridCellParams;
        event: React.KeyboardEvent<HTMLElement>;
    };
    cellDragEnter: {
        params: GridCellParams;
        event: React.DragEvent<HTMLElement>;
    };
    cellDragOver: {
        params: GridCellParams;
        event: React.DragEvent<HTMLElement>;
    };
}
interface GridControlledStateEventLookup {
    pageSizeChange: {
        params: number;
    };
    pageChange: {
        params: number;
    };
    filterModelChange: {
        params: GridFilterModel;
    };
    sortModelChange: {
        params: GridSortModel;
    };
    editRowsModelChange: {
        params: GridEditRowsModel;
    };
    selectionChange: {
        params: GridSelectionModel;
    };
    rowGroupingModelChange: {
        params: GridRowGroupingModel;
    };
    pinnedColumnsChange: {
        params: GridPinnedColumns;
    };
    columnVisibilityModelChange: {
        params: GridColumnVisibilityModel;
    };
    detailPanelsExpandedRowIdsChange: {
        params: GridRowId[];
    };
}
interface GridEventLookup extends GridRowEventLookup, GridColumnHeaderEventLookup, GridCellEventLookup, GridControlledStateEventLookup {
    unmount: {};
    componentError: {
        params: any;
    };
    stateChange: {
        params: GridState;
    };
    resize: {
        params: ElementSize;
    };
    viewportInnerSizeChange: {
        params: ElementSize;
    };
    debouncedResize: {
        params: ElementSize;
    };
    rowGroupsPreProcessingChange: {};
    preProcessorRegister: {
        params: GridPreProcessingGroup;
    };
    preProcessorUnregister: {
        params: GridPreProcessingGroup;
    };
    columnsChange: {
        params: string[];
    };
    columnWidthChange: {
        params: GridColumnResizeParams;
        event: MouseEvent | {};
    };
    columnResizeStart: {
        params: {
            field: string;
        };
        event: React.MouseEvent<HTMLElement>;
    };
    columnResizeStop: {
        params: null;
        event: MouseEvent;
    };
    columnVisibilityChange: {
        params: GridColumnVisibilityChangeParams;
    };
    columnResize: {
        params: GridColumnResizeParams;
        event: MouseEvent;
    };
    columnOrderChange: {
        params: GridColumnOrderChangeParams;
    };
    rowsSet: {};
    visibleRowsSet: {};
    rowExpansionChange: {
        params: GridRowTreeNodeConfig;
    };
    cellModeChange: {
        params: GridCellParams;
    };
    cellEditStart: {
        params: GridCellParams;
        event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
    };
    cellEditStop: {
        params: GridCellParams;
        event: MuiBaseEvent;
    };
    cellEditCommit: {
        params: GridCellEditCommitParams;
        event: MuiBaseEvent;
    };
    editCellPropsChange: {
        params: GridEditCellPropsParams;
        event: React.SyntheticEvent<HTMLElement> | {};
    };
    rowEditStart: {
        params: GridRowParams;
        event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
    };
    rowEditStop: {
        params: GridRowParams;
        event: MuiBaseEvent;
    };
    rowEditCommit: {
        params: GridRowId;
        event: MuiBaseEvent;
    };
    cellFocusIn: {
        params: GridCellParams;
    };
    cellFocusOut: {
        params: GridCellParams;
        event: MuiBaseEvent;
    };
    cellNavigationKeyDown: {
        params: GridCellParams | GridRowParams;
        event: React.KeyboardEvent<HTMLElement>;
    };
    columnHeaderNavigationKeyDown: {
        params: GridColumnHeaderParams;
        event: React.KeyboardEvent<HTMLElement>;
    };
    rowsScroll: {
        params: GridScrollParams;
    };
    rowsScrollEnd: {
        params: GridRowScrollEndParams;
    };
    virtualScrollerContentSizeChange: {};
    headerSelectionCheckboxChange: {
        params: GridHeaderSelectionCheckboxParams;
    };
    rowSelectionCheckboxChange: {
        params: GridRowSelectionCheckboxParams;
        event: React.ChangeEvent<HTMLElement>;
    };
}
declare type GridEventListener<E extends GridEventsStr> = (params: GridEventLookup[E] extends {
    params: any;
} ? GridEventLookup[E]['params'] : undefined, event: GridEventLookup[E] extends {
    event: MuiBaseEvent;
} ? MuiEvent<GridEventLookup[E]['event']> : MuiEvent<{}>, details: GridCallbackDetails) => void;
declare type PublisherArgsNoEvent<E extends GridEventsStr, T extends {
    params: any;
}> = [E, T['params']];
declare type PublisherArgsRequiredEvent<E extends GridEventsStr, T extends {
    params: any;
    event: MuiBaseEvent;
}> = [E, T['params'], T['event']];
declare type PublisherArgsOptionalEvent<E extends GridEventsStr, T extends {
    params: any;
    event: MuiBaseEvent;
}> = PublisherArgsRequiredEvent<E, T> | PublisherArgsNoEvent<E, T>;
declare type PublisherArgsEvent<E extends GridEventsStr, T extends {
    params: any;
    event: MuiBaseEvent;
}> = {} extends T['event'] ? PublisherArgsOptionalEvent<E, T> : PublisherArgsRequiredEvent<E, T>;
declare type PublisherArgsParams<E extends GridEventsStr, T extends {
    params: any;
}> = [E, T['params']];
declare type PublisherArgsNoParams<E extends GridEventsStr> = [E];
declare type GridEventPublisherArg<E extends GridEventsStr, T> = T extends {
    params: any;
    event: MuiBaseEvent;
} ? PublisherArgsEvent<E, T> : T extends {
    params: any;
} ? PublisherArgsParams<E, T> : PublisherArgsNoParams<E>;
declare type GridEventPublisher = <E extends GridEventsStr>(...params: GridEventPublisherArg<E, GridEventLookup[E]>) => void;
declare type EventListener = (...args: any[]) => void;
interface EventListenerOptions {
    isFirst?: boolean;
}
interface EventListenerCollection {
    /**
     * List of listeners to run before the others
     * They are ran in the opposite order of the registration order
     */
    highPriority: Map<EventListener, true>;
    /**
     * List of events to run after the high priority listeners
     * They are ran in the registration order
     */
    regular: Map<EventListener, true>;
}
declare class EventManager {
    maxListeners: number;
    warnOnce: boolean;
    events: {
        [eventName: string]: EventListenerCollection;
    };
    on(eventName: string, listener: EventListener, options?: EventListenerOptions): void;
    removeListener(eventName: string, listener: EventListener): void;
    removeAllListeners(): void;
    emit(eventName: string, ...args: any[]): void;
    once(eventName: string, listener: EventListener): void;
}
/**
 * The core API interface that is available in the grid `apiRef`.
 */
interface GridCoreApi {
    /**
     * The react ref of the grid root container div element.
     * @ignore - do not document.
     */
    rootElementRef?: React.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid column container virtualized div element.
     * @ignore - do not document.
     */
    columnHeadersContainerElementRef?: React.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid column headers container element.
     * @ignore - do not document.
     */
    columnHeadersElementRef?: React.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid window container element.
     * @ignore - do not document.
     */
    windowRef?: React.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid data rendering zone.
     * @ignore - do not document.
     */
    renderingZoneRef?: React.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid header element.
     * @ignore - do not document.
     */
    headerRef?: React.RefObject<HTMLDivElement>;
    /**
     * The react ref of the grid footer element.
     * @ignore - do not document.
     */
    footerRef?: React.RefObject<HTMLDivElement>;
    /**
     * The generic event emitter manager.
     * @ignore - do not document
     */
    unstable_eventManager: EventManager;
    /**
     * Registers a handler for an event.
     * @param {string} event The name of the event.
     * @param {function} handler The handler to be called.
     * @param {object} options Additional options for this listener.
     * @returns {function} A function to unsubscribe from this event.
     */
    subscribeEvent: <E extends GridEventsStr>(event: E, handler: GridEventListener<E>, options?: EventListenerOptions) => () => void;
    /**
     * Emits an event.
     * @param {GridEvents} name The name of the event.
     * @param {any} params Arguments to be passed to the handlers.
     * @param {MuiEvent<MuiBaseEvent>} event The event object to pass forward.
     */
    publishEvent: GridEventPublisher;
    /**
     * Displays the error overlay component.
     * @param {any} props Props to be passed to the `ErrorOverlay` component.
     */
    showError: (props: any) => void;
    /**
     * Unique identifier for each component instance in a page.
     * @ignore - do not document.
     */
    instanceId: number;
}
interface GridDensityOption {
    icon: React.ReactElement;
    label: string;
    value: GridDensityTypes;
}
/**
 * The density API interface that is available in the grid `apiRef`.
 */
interface GridDensityApi {
    /**
     * Sets the density of the grid.
     * @param {string} density Can be: `"compact"`, `"standard"`, `"comfortable"`.
     * @param {number} headerHeight The new header height.
     * @param {number} rowHeight The new row height.
     */
    setDensity: (density: GridDensity, headerHeight?: number, rowHeight?: number) => void;
}
/**
 * The Row API interface that is available in the grid `apiRef`.
 */
interface GridRowApi {
    /**
     * Gets the full set of rows as [[Map<GridRowId, GridRowModel>]].
     * @returns {Map<GridRowId, GridRowModel>} The full set of rows.
     */
    getRowModels: () => Map<GridRowId, GridRowModel>;
    /**
     * Gets the total number of rows in the grid.
     * @returns {number} The number of rows.
     */
    getRowsCount: () => number;
    /**
     * Gets the list of row ids.
     * @returns {GridRowId[]} A list of ids.
     */
    getAllRowIds: () => GridRowId[];
    /**
     * Sets a new set of rows.
     * @param {GridRowModel[]} rows The new rows.
     */
    setRows: (rows: GridRowModel[]) => void;
    /**
     * Allows to updates, insert and delete rows in a single call.
     * @param {GridRowModelUpdate[]} updates An array of rows with an `action` specifying what to do.
     */
    updateRows: (updates: GridRowModelUpdate[]) => void;
    /**
     * Gets the row data with a given id.
     * @param {GridRowId} id The id of the row.
     * @returns {GridRowModel} The row data.
     */
    getRow: (id: GridRowId) => GridRowModel | null;
    /**
     * Gets the row node from the internal tree structure.
     * @param {GridRowId} id The id of the row.
     * @returns {GridRowTreeNodeConfig} The row data.
     */
    getRowNode: (id: GridRowId) => GridRowTreeNodeConfig | null;
    /**
     * Expand or collapse a row children.
     * @param {GridRowId} id the ID of the row to expand or collapse.
     * @param {boolean} isExpanded A boolean indicating if the row must be expanded or collapsed.
     */
    setRowChildrenExpansion: (id: GridRowId, isExpanded: boolean) => void;
}
/**
 * The Row Meta API interface that is available in the grid `apiRef`.
 */
interface GridRowsMetaApi {
    /**
     * Gets base row height without considering additional height a row may take.
     * @param {GridRowId} id The id of the row.
     * @returns {number} The target row height.
     * @ignore - do not document.
     */
    unstable_getRowHeight: (id: GridRowId) => number;
}
/**
 * The selection API interface that is available in the grid [[apiRef]].
 */
interface GridSelectionApi {
    /**
     * Change the selection state of a row.
     * @param {GridRowId} id The id of the row.
     * @param {boolean} isSelected Pass `false` to unselect a row. Default is `true`.
     * @param {boolean} resetSelection Whether to reset the already selected rows or not. Default is `false`.
     */
    selectRow: (id: GridRowId, isSelected?: boolean, resetSelection?: boolean) => void;
    /**
     * Change the selection state of multiple rows.
     * @param {GridRowId[]} ids The row ids.
     * @param {boolean} isSelected The new selection state. Default is `true`.
     * @param {boolean} resetSelection Whether to reset the already selected rows or not. Default is `false`.
     */
    selectRows: (ids: GridRowId[], isSelected?: boolean, resetSelection?: boolean) => void;
    /**
     * Change the selection state of all the selectable rows in a range.
     * @param {Object} range The range of rows to select.
     * @param {GridRowId} range.startId The first row id.
     * @param {GridRowId} range.endId The last row id.
     * @param {boolean} isSelected The new selection state. Default is `true`.
     * @param {boolean} resetSelection Whether to reset the selected rows outside of the range or not. Default is `false`.
     */
    selectRowRange: (range: {
        startId: GridRowId;
        endId: GridRowId;
    }, isSelected?: boolean, resetSelection?: boolean) => void;
    /**
     * Determines if a row is selected or not.
     * @param {GridRowId} id The id of the row.
     * @returns {boolean} A boolean indicating if the row is selected.
     */
    isRowSelected: (id: GridRowId) => boolean;
    /**
     * Returns an array of the selected rows.
     * @returns {Map<GridRowId, GridRowModel>} A `Map` with the selected rows.
     */
    getSelectedRows: () => Map<GridRowId, GridRowModel>;
    /**
     * Updates the selected rows to be those passed to the `rowIds` argument.
     * Any row already selected will be unselected.
     * @param {GridRowId[]} rowIds The row ids to select.
     */
    setSelectionModel: (rowIds: GridRowId[]) => void;
}
/**
 * The sort API interface that is available in the grid [[apiRef]].
 */
interface GridSortApi {
    /**
     * Returns the sort model currently applied to the grid.
     * @returns {GridSortModel} The `GridSortModel`.
     */
    getSortModel: () => GridSortModel;
    /**
     * Applies the current sort model to the rows.
     */
    applySorting: () => void;
    /**
     * Updates the sort model and triggers the sorting of rows.
     * @param {GridSortModel} model The `GridSortModel` to be applied.
     */
    setSortModel: (model: GridSortModel) => void;
    /**
     * Sorts a column.
     * @param {GridColDef} column The [[GridColDef]] of the column to be sorted.
     * @param {GridSortDirection} direction The direction to be sorted. By default, the next in the `sortingOrder` prop.
     * @param {boolean} allowMultipleSorting Whether to keep the existing [[GridSortItem]]. Default is `false`.
     */
    sortColumn: (column: GridColDef, direction?: GridSortDirection, allowMultipleSorting?: boolean) => void;
    /**
     * Returns all rows sorted according to the active sort model.
     * @returns {GridRowModel[]} The sorted [[GridRowModel]] objects.
     */
    getSortedRows: () => GridRowModel[];
    /**
     * Returns all row ids sorted according to the active sort model.
     * @returns {GridRowId[]} The sorted [[GridRowId]] values.
     */
    getSortedRowIds: () => GridRowId[];
    /**
     * Gets the `GridRowId` of a row at a specific index.
     * The index is based on the sorted but unfiltered row list.
     * @param {number} index The index of the row
     * @returns {GridRowId} The `GridRowId` of the row.
     */
    getRowIdFromRowIndex: (index: number) => GridRowId;
    /**
     * Gets the row index of a row with a given id.
     * The index is based on the sorted but unfiltered row list.
     * @param {GridRowId} id The `GridRowId` of the row.
     * @returns {number} The index of the row.
     */
    getRowIndex: (id: GridRowId) => number;
}
interface GridControlStateItem<E extends keyof GridControlledStateEventLookup> {
    stateId: string;
    propModel?: GridEventLookup[E]['params'];
    stateSelector: OutputSelector<GridControlledStateEventLookup[E]['params']> | ((state: GridState) => GridControlledStateEventLookup[E]['params']);
    propOnChange?: (model: GridControlledStateEventLookup[E]['params'], details: GridCallbackDetails) => void;
    changeEvent: E;
}
interface GridStateApi {
    /**
     * Property that contains the whole state of the grid.
     */
    state: GridState;
    /**
     * Forces the grid to rerender. It's often used after a state update.
     */
    forceUpdate: () => void;
    /**
     * Sets the whole state of the grid.
     * @param {GridState | (oldState: GridState) => GridState} state The new state or the callback creating the new state.
     * @returns {boolean} Has the state been updated.
     */
    setState: (state: GridState | ((previousState: GridState) => GridState)) => boolean;
    /**
     * Updates a control state that binds the model, the onChange prop, and the grid state together.
     * @param {GridControlStateItem>} controlState The [[GridControlStateItem]] to be registered.
     * @ignore - do not document.
     */
    unstable_updateControlState: <E extends keyof GridControlledStateEventLookup>(controlState: GridControlStateItem<E>) => void;
}
/**
 * Set the types of the texts in the grid.
 */
interface GridLocaleText {
    noRowsLabel: string;
    noResultsOverlayLabel: string;
    errorOverlayDefaultLabel: string;
    toolbarDensity: React.ReactNode;
    toolbarDensityLabel: string;
    toolbarDensityCompact: string;
    toolbarDensityStandard: string;
    toolbarDensityComfortable: string;
    toolbarColumns: React.ReactNode;
    toolbarColumnsLabel: string;
    toolbarFilters: React.ReactNode;
    toolbarFiltersLabel: string;
    toolbarFiltersTooltipHide: React.ReactNode;
    toolbarFiltersTooltipShow: React.ReactNode;
    toolbarFiltersTooltipActive: (count: number) => React.ReactNode;
    toolbarExport: React.ReactNode;
    toolbarExportLabel: string;
    toolbarExportCSV: React.ReactNode;
    toolbarExportPrint: React.ReactNode;
    columnsPanelTextFieldLabel: string;
    columnsPanelTextFieldPlaceholder: string;
    columnsPanelDragIconLabel: string;
    columnsPanelShowAllButton: React.ReactNode;
    columnsPanelHideAllButton: React.ReactNode;
    filterPanelAddFilter: React.ReactNode;
    filterPanelDeleteIconLabel: string;
    filterPanelOperators: React.ReactNode;
    filterPanelOperatorAnd: React.ReactNode;
    filterPanelOperatorOr: React.ReactNode;
    filterPanelColumns: React.ReactNode;
    filterPanelInputLabel: string;
    filterPanelInputPlaceholder: string;
    filterOperatorContains: string;
    filterOperatorEquals: string;
    filterOperatorStartsWith: string;
    filterOperatorEndsWith: string;
    filterOperatorIs: string;
    filterOperatorNot: string;
    filterOperatorAfter: string;
    filterOperatorOnOrAfter: string;
    filterOperatorBefore: string;
    filterOperatorOnOrBefore: string;
    filterOperatorIsEmpty: string;
    filterOperatorIsNotEmpty: string;
    filterOperatorIsAnyOf: string;
    filterValueAny: string;
    filterValueTrue: string;
    filterValueFalse: string;
    columnMenuLabel: string;
    columnMenuShowColumns: React.ReactNode;
    columnMenuFilter: React.ReactNode;
    columnMenuHideColumn: React.ReactNode;
    columnMenuUnsort: React.ReactNode;
    columnMenuSortAsc: React.ReactNode;
    columnMenuSortDesc: React.ReactNode;
    columnHeaderFiltersTooltipActive: (count: number) => React.ReactNode;
    columnHeaderFiltersLabel: string;
    columnHeaderSortIconLabel: string;
    footerRowSelected: (count: number) => React.ReactNode;
    footerTotalRows: React.ReactNode;
    footerTotalVisibleRows: (visibleCount: number, totalCount: number) => React.ReactNode;
    checkboxSelectionHeaderName: string;
    checkboxSelectionSelectAllRows: string;
    checkboxSelectionUnselectAllRows: string;
    checkboxSelectionSelectRow: string;
    checkboxSelectionUnselectRow: string;
    booleanCellTrueLabel: string;
    booleanCellFalseLabel: string;
    actionsCellMore: string;
    pinToLeft: string;
    pinToRight: string;
    unpin: string;
    treeDataGroupingHeaderName: string;
    treeDataExpand: string;
    treeDataCollapse: string;
    groupingColumnHeaderName: string;
    groupColumn: (name: string) => string;
    unGroupColumn: (name: string) => string;
    expandDetailPanel: string;
    collapseDetailPanel: string;
    MuiTablePagination: Omit<ComponentsPropsList['MuiTablePagination'], 'page' | 'count' | 'onChangePage' | 'rowsPerPage' | 'onPageChange'>;
}
declare type GridTranslationKeys = keyof GridLocaleText;
/**
 * The grid locale text API [[apiRef]].
 */
interface GridLocaleTextApi {
    /**
     * Returns the translation for the `key`.
     * @param {T} key One of the keys in [[GridLocaleText]].
     * @returns {GridLocaleText[T]} The translated value.
     */
    getLocaleText: <T extends GridTranslationKeys>(key: T) => GridLocaleText[T];
}
/**
 * The options applicable to any export declare format.
 */
interface GridExportOptions {
    /**
     * The columns exported.
     * This should only be used if you want to restrict the columns exports.
     */
    fields?: string[];
    /**
     * If `true`, the hidden columns will also be exported.
     * @default false
     */
    allColumns?: boolean;
}
interface GridCsvGetRowsToExportParams {
    /**
     * The API of the grid.
     */
    apiRef: GridApiRef;
}
/**
 * The options to apply on the CSV export.
 */
interface GridCsvExportOptions extends GridExportOptions {
    /**
     * The character used to separate fields.
     * @default ','
     */
    delimiter?: string;
    /**
     * The string used as the file name.
     * @default `document.title`
     */
    fileName?: string;
    /**
     * If `true`, the UTF-8 Byte Order Mark (BOM) prefixes the exported file.
     * This can allow Excel to automatically detect file encoding as UTF-8.
     * @default false
     */
    utf8WithBom?: boolean;
    /**
     * If `true`, the first row of the CSV will include the headers of the grid.
     * @default true
     */
    includeHeaders?: boolean;
    /**
     * Function that returns the id of the rows to export declare on the order they should be exported.
     * @param {GridCsvGetRowsToExportParams} params With all properties from [[GridCsvGetRowsToExportParams]].
     * @returns {GridRowId[]} The id of the rows to export.
     */
    getRowsToExport?: (params: GridCsvGetRowsToExportParams) => GridRowId[];
}
/**
 * The options to apply on the Print export.
 */
interface GridPrintExportOptions extends GridExportOptions {
    /**
     * The value to be used as the print window title.
     * @default The title of the page.
     */
    fileName?: string;
    /**
     * If `true`, the toolbar is removed for when printing.
     * @default false
     */
    hideToolbar?: boolean;
    /**
     * If `true`, the footer is removed for when printing.
     * @default false
     */
    hideFooter?: boolean;
    /**
     * If `false`, all <style> and <link type="stylesheet" /> tags from the <head> will not be copied
     * to the print window.
     * @default true
     */
    copyStyles?: boolean;
    /**
     * One or more classes passed to the print window.
     */
    bodyClassName?: string;
    /**
     * Provide Print specific styles to the print window.
     */
    pageStyle?: string | Function;
}
/**
 * Available export declare formats.
 */
declare type GridExportFormat = 'csv' | 'print';
/**
 * The CSV export declare API interface that is available in the grid [[apiRef]].
 */
interface GridCsvExportApi {
    /**
     * Returns the grid data as a CSV string.
     * This method is used internally by `exportDataAsCsv`.
     * @param {GridCsvExportOptions} options The options to apply on the export.
     * @returns {string} The data in the CSV format.
     */
    getDataAsCsv: (options?: GridCsvExportOptions) => string;
    /**
     * Downloads and exports a CSV of the grid's data.
     * @param {GridCsvExportOptions} options The options to apply on the export.
     */
    exportDataAsCsv: (options?: GridCsvExportOptions) => void;
}
interface GridFocusApi {
    /**
     * Sets the focus to the cell at the given `id` and `field`.
     * @param {GridRowId} id The row id.
     * @param {string} field The column field.
     */
    setCellFocus: (id: GridRowId, field: string) => void;
    /**
     * Sets the focus to the column header at the given `field`.
     * @param {string} field The column field.
     * @param {string} event The event that triggers the action.
     */
    setColumnHeaderFocus: (field: string, event?: MuiBaseEvent) => void;
}
/**
 * The filter API interface that is available in the grid [[apiRef]].
 */
interface GridFilterApi {
    /**
     * Shows the filter panel. If `targetColumnField` is given, a filter for this field is also added.
     * @param {string} targetColumnField The column field to add a filter.
     */
    showFilterPanel: (targetColumnField?: string) => void;
    /**
     * Hides the filter panel.
     */
    hideFilterPanel: () => void;
    /**
     * Updates or inserts a [[GridFilterItem]].
     * @param {GridFilterItem} item The filter to update.
     */
    upsertFilterItem: (item: GridFilterItem) => void;
    /**
     * Applies all filters on all rows.
     * @ignore - do not document.
     */
    unstable_applyFilters: () => void;
    /**
     * Deletes a [[GridFilterItem]].
     * @param {GridFilterItem} item The filter to delete.
     */
    deleteFilterItem: (item: GridFilterItem) => void;
    /**
     * Changes the [[GridLinkOperator]] used to connect the filters.
     * @param {GridLinkOperator} operator The new link operator. It can be: `"and"` or `"or`".
     */
    setFilterLinkOperator: (operator: GridLinkOperator) => void;
    /**
     * Sets the filter model to the one given by `model`.
     * @param {GridFilterModel} model The new filter model.
     */
    setFilterModel: (model: GridFilterModel) => void;
    /**
     * Returns a sorted `Map` containing only the visible rows.
     * @returns {Map<GridRowId, GridRowModel>} The sorted `Map`.
     */
    getVisibleRowModels: () => Map<GridRowId, GridRowModel>;
}
/**
 * The column menu API interface that is available in the grid [[apiRef]].
 */
interface GridColumnMenuApi {
    /**
     * Display the column menu under the `field` column.
     * @param {string} field The column to display the menu.
     */
    showColumnMenu: (field: string) => void;
    /**
     * Hides the column menu that is open.
     */
    hideColumnMenu: () => void;
    /**
     * Toggles the column menu under the `field` column.
     * @param {string} field The field name to toggle the column menu.
     */
    toggleColumnMenu: (field: string) => void;
}
/**
 * The preferences panel API interface that is available in the grid [[apiRef]].
 */
interface GridPreferencesPanelApi {
    /**
     * Displays the preferences panel. The `newValue` argument controls the content of the panel.
     * @param {GridPreferencePanelsValue} newValue The panel to open. Use `"filters"` or `"columns"`.
     */
    showPreferences: (newValue: GridPreferencePanelsValue) => void;
    /**
     * Hides the preferences panel.
     */
    hidePreferences: () => void;
}
/**
 * The Print export declare API interface that is available in the grid [[apiRef]].
 */
interface GridPrintExportApi {
    /**
     * Print the grid's data.
     * @param {GridPrintExportOptions} options The options to apply on the export.
     */
    exportDataAsPrint: (options?: GridPrintExportOptions) => void;
}
/**
 * The disable virtualization API interface that is available in the grid [[apiRef]].
 */
interface GridDisableVirtualizationApi {
    /**
     * Disables grid's virtualization.
     * @ignore - do not document. Remove before releasing v5 stable version.
     */
    unstable_disableVirtualization: () => void;
    /**
     * Enables grid's virtualization.
     * @ignore - do not document. Remove before releasing v5 stable version.
     */
    unstable_enableVirtualization: () => void;
}
/**
 * The Clipboard API interface that is available in the grid [[apiRef]].
 */
interface GridClipboardApi {
    /**
     * Copies the selected rows to the clipboard.
     * The fields will separated by the TAB character.
     * @param {boolean} includeHeaders Whether to include the headers or not. Default is `false`.
     * @ignore - do not document.
     */
    unstable_copySelectedRowsToClipboard: (includeHeaders?: boolean) => void;
}
/**
 * The scroll API interface that is available in the grid [[apiRef]].
 */
interface GridScrollApi {
    /**
     * Triggers the viewport to scroll to the given positions (in pixels).
     * @param {GridScrollParams} params An object containing the `left` or `top` position to scroll.
     */
    scroll: (params: Partial<GridScrollParams>) => void;
    /**
     * Returns the current scroll position.
     * @returns {GridScrollParams} The scroll positions.
     */
    getScrollPosition: () => GridScrollParams;
    /**
     * Triggers the viewport to scroll to the cell at indexes given by `params`.
     * Returns `true` if the grid had to scroll to reach the target.
     * @param {GridCellIndexCoordinates} params The indexes where the cell is.
     * @returns {boolean} Returns `true` if the index was outside of the viewport and the grid had to scroll to reach the target.
     */
    scrollToIndexes: (params: Partial<GridCellIndexCoordinates>) => boolean;
}
interface GridVirtualScrollerApi {
    /**
     * Get the current grid rendering context.
     * @returns {GridRenderContext} The `GridRenderContext`.
     * @ignore - do not document.
     */
    unstable_getRenderContext: () => GridRenderContext;
}
/**
 * The master/detail API interface that is available in the grid [[apiRef]].
 */
interface GridDetailPanelApi {
    /**
     * Expands or collapses the detail panel of a row.
     * @param {string} id The row id to toggle the panel.
     */
    toggleDetailPanel: (id: GridRowId) => void;
    /**
     * Returns the rows whose detail panel is open.
     * @returns {GridRowId[]} An array of row ids.
     */
    getExpandedDetailPanels: () => GridRowId[];
    /**
     * Changes which rows to expand the detail panel.
     * @param {GridRowId[]} ids The ids of the rows to open the detail panel.
     */
    setExpandedDetailPanels: (ids: GridRowId[]) => void;
}
declare type GridEditRowApi = GridEditingApi;
declare type GridSortDirection = 'asc' | 'desc' | null | undefined;
interface GridSortCellParams {
    id: GridRowId;
    field: string;
    value: GridCellValue;
    rowNode: GridRowTreeNodeConfig;
    api: GridApi;
}
/**
 * The type of the sort comparison function.
 */
declare type GridComparatorFn = (v1: GridCellValue, v2: GridCellValue, cellParams1: GridSortCellParams, cellParams2: GridSortCellParams) => number;
/**
 * Object that represents the column sorted data, part of the [[GridSortModel]].
 */
interface GridSortItem {
    /**
     * The column field identifier.
     */
    field: string;
    /**
     * The direction of the column that the grid should sort.
     */
    sort: GridSortDirection;
}
/**
 * The model used for sorting the grid.
 */
declare type GridSortModel = GridSortItem[];
declare type GridNativeColTypes = 'string' | 'number' | 'date' | 'dateTime' | 'boolean' | 'singleSelect' | 'actions';
declare type GridColType = GridNativeColTypes | string;
declare type GridActionsCellItemProps = {
    label: string;
    icon?: React.ReactElement;
} & (({
    showInMenu?: false;
    icon: React.ReactElement;
} & IconButtonProps) | ({
    showInMenu: true;
} & MenuItemProps));
declare const GridActionsCellItem: {
    (props: GridActionsCellItemProps): JSX.Element;
    propTypes: any;
};
/**
 * Alignment used in position elements in Cells.
 */
declare type GridAlignment = 'left' | 'right' | 'center';
declare type ValueOptions = string | number | {
    value: any;
    label: string;
};
/**
 * Value that can be used as a key for grouping rows
 */
declare type GridKeyValue = string | number | boolean;
/**
 * Column Definition interface.
 */
interface GridColDef {
    /**
     * The column identifier. It's used to map with [[GridRowModel]] values.
     */
    field: string;
    /**
     * The title of the column rendered in the column header cell.
     */
    headerName?: string;
    /**
     * The description of the column rendered as tooltip if the column header name is not fully displayed.
     */
    description?: string;
    /**
     * Set the width of the column.
     * @default 100
     */
    width?: number;
    /**
     * If set, it indicates that a column has fluid width. Range [0, ???).
     */
    flex?: number;
    /**
     * Sets the minimum width of a column.
     * @default 50
     */
    minWidth?: number;
    /**
     * Sets the maximum width of a column.
     * @default Infinity
     */
    maxWidth?: number;
    /**
     * If `true`, hide the column.
     * @deprecated Use the `columnVisibility` prop instead.
     * @default false
     */
    hide?: boolean;
    /**
     * If `false`, removes the buttons for hiding this column.
     * @default true
     */
    hideable?: boolean;
    /**
     * If `true`, the column is sortable.
     * @default true
     */
    sortable?: boolean;
    /**
     * The order of the sorting sequence.
     */
    sortingOrder?: GridSortDirection[];
    /**
     * If `true`, the column is resizable.
     * @default true
     */
    resizable?: boolean;
    /**
     * If `true`, the cells of the column are editable.
     * @default false
     */
    editable?: boolean;
    /**
     * If `true`, the rows can be grouped based on this column values (pro-plan only).
     * @default true
     */
    groupable?: boolean;
    /**
     * If `false`, the menu items for column pinning menu will not be rendered.
     * Only available in DataGridPro.
     * @default true
     */
    pinnable?: boolean;
    /**
     * A comparator function used to sort rows.
     */
    sortComparator?: GridComparatorFn;
    /**
     * Type allows to merge this object with a default definition [[GridColDef]].
     * @default 'string'
     */
    type?: GridColType;
    /**
     * To be used in combination with `type: 'singleSelect'`. This is an array (or a function returning an array) of the possible cell values and labels.
     */
    valueOptions?: Array<ValueOptions> | ((params: GridValueOptionsParams) => Array<ValueOptions>);
    /**
     * Allows to align the column values in cells.
     */
    align?: GridAlignment;
    /**
     * Function that allows to get a specific data instead of field to render in the cell.
     * @param {GridValueGetterParams} params Object containing parameters for the getter.
     * @returns {GridCellValue} The cell value.
     */
    valueGetter?: (params: GridValueGetterParams) => GridCellValue;
    /**
     * Function that transforms a complex cell value into a key that be used for grouping the rows.
     * @param {GridGroupingValueGetterParams} params Object containing parameters for the getter.
     * @returns {GridKeyValue | null | undefined} The cell key.
     */
    groupingValueGetter?: (params: GridGroupingValueGetterParams) => GridKeyValue | null | undefined;
    /**
     * Function that allows to customize how the entered value is stored in the row.
     * It only works with cell/row editing.
     * @param {GridValueSetterParams} params Object containing parameters for the setter.
     * @returns {GridRowModel} The row with the updated field.
     */
    valueSetter?: (params: GridValueSetterParams) => GridRowModel;
    /**
     * Function that allows to apply a formatter before rendering its value.
     * @param {GridValueFormatterParams} params Object containing parameters for the formatter.
     * @returns {GridCellValue} The formatted value.
     */
    valueFormatter?: (params: GridValueFormatterParams) => GridCellValue;
    /**
     * Function that takes the user-entered value and converts it to a value used internally.
     * @param {GridCellValue} value The user-entered value.
     * @param {GridCellParams} params The params when called before saving the value.
     * @returns {GridCellValue} The converted value to use internally.
     */
    valueParser?: (value: GridCellValue, params?: GridCellParams) => GridCellValue;
    /**
     * Class name that will be added in cells for that column.
     */
    cellClassName?: GridCellClassNamePropType;
    /**
     * Allows to override the component rendered as cell for this column.
     * @param {GridRenderCellParams} params Object containing parameters for the renderer.
     * @returns {React.ReactNode} The element to be rendered.
     */
    renderCell?: (params: GridRenderCellParams) => React.ReactNode;
    /**
     * Allows to override the component rendered in edit cell mode for this column.
     * @param {GridRenderEditCellParams} params Object containing parameters for the renderer.
     * @returns {React.ReactNode} The element to be rendered.
     */
    renderEditCell?: (params: GridRenderEditCellParams) => React.ReactNode;
    /**
     * Callback fired when the edit props of the cell changes.
     * It allows to process the props that saved into the state.
     * @param {GridPreProcessEditCellProps} params Object contaning parameters of the cell being editted.
     * @returns {GridEditCellProps | Promise<GridEditCellProps>} The new edit cell props.
     */
    preProcessEditCellProps?: (params: GridPreProcessEditCellProps) => GridEditCellProps | Promise<GridEditCellProps>;
    /**
     * Class name that will be added in the column header cell.
     */
    headerClassName?: GridColumnHeaderClassNamePropType;
    /**
     * Allows to render a component in the column header cell.
     * @param {GridColumnHeaderParams} params Object containing parameters for the renderer.
     * @returns {React.ReactNode} The element to be rendered.
     */
    renderHeader?: (params: GridColumnHeaderParams) => React.ReactNode;
    /**
     * Header cell element alignment.
     */
    headerAlign?: GridAlignment;
    /**
     * Toggle the visibility of the sort icons.
     * @default false
     */
    hideSortIcons?: boolean;
    /**
     * If `true`, the column menu is disabled for this column.
     * @default false
     */
    disableColumnMenu?: boolean;
    /**
     * If `true`, the column is filterable.
     * @default true
     */
    filterable?: boolean;
    /**
     * Allows setting the filter operators for this column.
     */
    filterOperators?: GridFilterOperator[];
    /**
     * If `true`, this column cannot be reordered.
     * @default false
     */
    disableReorder?: boolean;
    /**
     * If `true`, this column will not be included in exports.
     * @default false
     */
    disableExport?: boolean;
}
interface GridActionsColDef extends GridColDef {
    /**
     * Type allows to merge this object with a default definition [[GridColDef]].
     * @default 'actions'
     */
    type: 'actions';
    /**
     * Function that returns the actions to be shown.
     * @param {GridRowParams} params The params for each row.
     * @returns {React.ReactElement<GridActionsCellItemProps>[]} An array of [[GridActionsCell]] elements.
     */
    getActions: (params: GridRowParams) => React.ReactElement<GridActionsCellItemProps>[];
}
declare type GridEnrichedColDef = GridColDef | GridActionsColDef;
declare type GridColumns = GridEnrichedColDef[];
declare type GridColTypeDef = Omit<GridColDef, 'field'> & {
    extendType?: GridNativeColTypes;
};
declare type GridStateColDef = GridEnrichedColDef & {
    computedWidth: number;
};
/**
 * Meta Info about columns.
 */
interface GridColumnsMeta {
    totalWidth: number;
    positions: number[];
}
interface GridGroupingColDefOverride extends Omit<GridColDef, 'editable' | 'valueSetter' | 'field' | 'type' | 'preProcessEditCellProps' | 'renderEditCell' | 'groupable'> {
    /**
     * The field from which we want to apply the sorting and the filtering for the grouping column.
     * It is only useful when `props.rowGroupingColumnMode === "multiple"` to decide which grouping criteria should be used for sorting and filtering.
     * Do not have any effect when building the tree with the `props.treeData` feature.
     * @default: The sorting and filtering is applied based on the leaf field in any, otherwise based on top level grouping criteria.
     */
    mainGroupingCriteria?: string;
    /**
     * The field from which we want to render the leaves of the tree.
     * Do not have any effect when building the tree with the `props.treeData` feature.
     */
    leafField?: string;
    /**
     * If `true`, the grouping cells will not render the amount of descendants.
     * @default: false
     */
    hideDescendantCount?: boolean;
}
interface GridGroupingColDefOverrideParams {
    /**
     * The name of the grouping algorithm currently building the grouping column.
     */
    groupingName: string;
    /**
     * The fields of the columns from which we want to group the values on this new grouping column.
     */
    fields: string[];
}
/**
 * The column API interface that is available in the grid [[apiRef]].
 */
interface GridColumnApi {
    /**
     * Returns the [[GridColDef]] for the given `field`.
     * @param {string} field The column field.
     * @returns {{GridStateColDef}} The [[GridStateColDef]].
     */
    getColumn: (field: string) => GridStateColDef;
    /**
     * Returns an array of [[GridColDef]] containing all the column definitions.
     * @returns {GridStateColDef[]} An array of [[GridStateColDef]].
     */
    getAllColumns: () => GridStateColDef[];
    /**
     * Returns the currently visible columns.
     * @returns {GridStateColDef[]} An array of [[GridStateColDef]].
     */
    getVisibleColumns: () => GridStateColDef[];
    /**
     * Returns the [[GridColumnsMeta]] for each column.
     * @returns {GridColumnsMeta[]} All [[GridColumnsMeta]] objects.
     */
    getColumnsMeta: () => GridColumnsMeta;
    /**
     * Returns the index position of a column. By default, only the visible columns are considered.
     * Pass `false` to `useVisibleColumns` to consider all columns.
     * @param {string} field The column field.
     * @param {boolean} useVisibleColumns Determines if all columns or the visible ones should be considered. Default is `true`.
     * @returns {number} The index position.
     */
    getColumnIndex: (field: string, useVisibleColumns?: boolean) => number;
    /**
     * Returns the left-position of a column relative to the inner border of the grid.
     * @param {string} field The column field.
     * @returns {number} The position in pixels.
     */
    getColumnPosition: (field: string) => number;
    /**
     * Updates the definition of a column.
     * @param {GridColDef} col The new [[GridColDef]] object.
     * @deprecated Use `apiRef.current.updateColumns` instead.
     */
    updateColumn: (col: GridColDef) => void;
    /**
     * Updates the definition of multiple columns at the same time.
     * @param {GridColDef[]} cols The new column [[GridColDef]] objects.
     */
    updateColumns: (cols: GridColDef[]) => void;
    /**
     * Sets the column visibility model to the one given by `model`.
     * @param {GridColumnVisibilityModel} model The new visible columns model.
     */
    setColumnVisibilityModel: (model: GridColumnVisibilityModel) => void;
    /**
     * Changes the visibility of the column referred by `field`.
     * @param {string} field The column to change visibility.
     * @param {boolean} isVisible Pass `true` to show the column, or `false` to hide it. Default is `false`
     */
    setColumnVisibility: (field: string, isVisible: boolean) => void;
    /**
     * Moves a column from its original position to the position given by `targetIndexPosition`.
     * @param {string} field The field name
     * @param {number} targetIndexPosition The new position (0-based).
     */
    setColumnIndex: (field: string, targetIndexPosition: number) => void;
    /**
     * Updates the width of a column.
     * @param {string} field The column field.
     * @param {number} width The new width.
     */
    setColumnWidth: (field: string, width: number) => void;
}
/**
 * The logger API interface that is available in the grid `apiRef`.
 */
interface GridLoggerApi {
    /**
     * @param {string} name The name of the logger
     * @returns {Logger} Instance of the logger
     * @ignore - do not document.
     */
    getLogger: (name: string) => Logger;
}
interface GridDimensions {
    /**
     * The viewport size including scrollbars.
     */
    viewportOuterSize: ElementSize;
    /**
     * The viewport size not including scrollbars.
     */
    viewportInnerSize: ElementSize;
    /**
     * Indicates if a scroll is currently needed to go from the beginning of the first column to the end of the last column.
     */
    hasScrollX: boolean;
    /**
     * Indicates if a scroll is currently needed to go from the beginning of the first row to the end of the last row.
     */
    hasScrollY: boolean;
}
interface GridDimensionsApi {
    /**
     * Triggers a resize of the component and recalculation of width and height.
     */
    resize: () => void;
    /**
     * Returns the dimensions of the grid
     * @returns {GridDimensions | null} The dimension information of the grid. If `null`, the grid is not ready yet.
     */
    getRootDimensions: () => GridDimensions | null;
    /**
     * Returns the amount of rows that are currently visible in the viewport
     * @returns {number} The amount of rows visible in the viewport
     * @ignore - do not document.
     */
    unstable_getViewportPageSize: () => number;
}
/**
 * The full grid API.
 */
interface GridApi extends GridCoreApi, GridStateApi, GridLoggerApi, GridPreProcessingApi, GridRowGroupsPreProcessingApi, GridDensityApi, GridDimensionsApi, GridRowApi, GridRowsMetaApi, GridEditingApi, GridParamsApi, GridColumnApi, GridSelectionApi, GridSortApi, GridPaginationApi, GridCsvExportApi, GridFocusApi, GridFilterApi, GridColumnMenuApi, GridPreferencesPanelApi, GridPrintExportApi, GridDisableVirtualizationApi, GridLocaleTextApi, GridClipboardApi, GridScrollApi, GridRowGroupingApi, GridVirtualScrollerApi, GridColumnPinningApi, GridStatePersistenceApi, GridDetailPanelApi {
}
/**
 * Object passed as parameter in the column [[GridColDef]] cell renderer.
 */
interface GridCellParams<V = any, R = any, F = V> {
    /**
     * The grid row id.
     */
    id: GridRowId;
    /**
     * The column field of the cell that triggered the event.
     */
    field: string;
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: V;
    /**
     * The cell value formatted with the column valueFormatter.
     */
    formattedValue: F;
    /**
     * The row model of the row that the current cell belongs to.
     */
    row: GridRowModel<R>;
    /**
     * The node of the row that the current cell belongs to.
     */
    rowNode: GridRowTreeNodeConfig;
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: GridStateColDef;
    /**
     * If true, the cell is editable.
     */
    isEditable?: boolean;
    /**
     * The mode of the cell.
     */
    cellMode: GridCellMode;
    /**
     * If true, the cell is the active element.
     */
    hasFocus: boolean;
    /**
     * the tabIndex value.
     */
    tabIndex: 0 | -1;
    /**
     * Get the cell value of a row and field.
     * @param {GridRowId} id The row id.
     * @param {string} field The field.
     * @returns {GridCellValue} The cell value.
     * @deprecated Use `params.row` to directly access the fields you want instead.
     */
    getValue: (id: GridRowId, field: string) => GridCellValue;
}
/**
 * GridCellParams containing api.
 */
interface GridRenderCellParams<V = any, R = any, F = V> extends GridCellParams<V, R, F> {
    /**
     * GridApi that let you manipulate the grid.
     */
    api: GridApi;
}
/**
 * GridEditCellProps containing api.
 */
interface GridRenderEditCellParams extends GridEditCellProps {
    /**
     * GridApi that let you manipulate the grid.
     */
    api: GridApi;
}
/**
 * Parameters passed to `colDef.valueGetter`.
 */
interface GridValueGetterParams<V = any, R = any> extends Omit<GridCellParams<V, R>, 'formattedValue' | 'isEditable'> {
    /**
     * GridApi that let you manipulate the grid.
     */
    api: GridApi;
}
/**
 * @deprecated Use `GridValueGetterParams` instead.
 */
declare type GridValueGetterFullParams<V = any, R = any> = GridValueGetterParams<V, R>;
/**
 * Parameters passed to `colDef.groupingValueGetter`.
 */
interface GridGroupingValueGetterParams<V = any, R = any> {
    /**
     * The grid row id.
     */
    id: GridRowId;
    /**
     * The column field of the cell that triggered the event.
     */
    field: string;
    /**
     * The cell value, does not take `valueGetter` into account.
     */
    value: V;
    /**
     * The row model of the row that the current cell belongs to.
     */
    row: GridRowModel<R>;
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: GridColDef | GridStateColDef;
    /**
     * The node of the row that the current cell belongs to.
     * It only contains the information available before the actual grouping.
     */
    rowNode: Pick<GridRowTreeNodeConfig, 'id' | 'isAutoGenerated'>;
}
/**
 * Object passed as parameter in the column [[GridColDef]] value setter callback.
 */
interface GridValueSetterParams {
    /**
     * The new cell value.
     */
    value: GridCellValue;
    /**
     * The row that is being edited.
     */
    row: GridRowModel;
}
/**
 * Object passed as parameter in the column [[GridColDef]] value formatter callback.
 */
interface GridValueFormatterParams {
    /**
     * The grid row id.
     * It is not available when the value formatter is called by the filter panel.
     */
    id?: GridRowId;
    /**
     * The column field of the cell that triggered the event.
     */
    field: string;
    /**
     * The cell value, if the column has valueGetter it is the value returned by it.
     */
    value: GridCellValue;
    /**
     * GridApi that let you manipulate the grid.
     */
    api: GridApi;
}
/**
 * Object passed as parameter in the column [[GridColDef]] edit cell props change callback.
 */
interface GridPreProcessEditCellProps {
    /**
     * The grid row id.
     */
    id: GridRowId;
    /**
     * The row that is being editted.
     */
    row: GridRowModel;
    /**
     * The edit cell props.
     */
    props: GridEditCellProps;
}
/**
 * Filter operator definition interface.
 */
interface GridFilterOperator {
    /**
     * The label of the filter operator.
     */
    label?: string;
    /**
     * The name of the filter operator.
     * It will be matched with the `operatorValue` property of the filter items.
     */
    value: string;
    /**
     * The callback that generates a filtering function for a given filter item and column.
     * This function can return `null` to skip filtering for this item and column.
     * @param {GridFilterItem} filterItem The filter item with which we want to filter the column.
     * @param {GridStateColDef} column The column from which we want to filter the rows.
     * @returns {null | ((params: GridCellParams) => boolean)} The function to call to check if a row poss this filter item or not.
     */
    getApplyFilterFn: (filterItem: GridFilterItem, column: GridStateColDef) => null | ((params: GridCellParams) => boolean);
    /**
     * The input component to render in the filter panel for this filter operator.
     */
    InputComponent?: React.JSXElementConstructor<GridFilterInputValueProps> | React.JSXElementConstructor<GridFilterInputMultipleValueProps> | React.JSXElementConstructor<GridFilterInputMultipleSingleSelectProps>;
    /**
     * The props to pass to the input component in the filter panel for this filter operator.
     */
    InputComponentProps?: Record<string, any>;
}
declare const getGridBooleanOperators: () => GridFilterOperator[];
declare const getGridDateOperators: (showTime?: boolean | undefined) => GridFilterOperator[];
declare const getGridNumericOperators: () => GridFilterOperator[];
/**
 * @deprecated Use `getGridNumericOperators` instead.
 */
declare const getGridNumericColumnOperators: () => GridFilterOperator[];
declare const getGridSingleSelectOperators: () => GridFilterOperator[];
declare const getGridStringOperators: () => GridFilterOperator[];
declare const GRID_ACTIONS_COL_DEF: GridColTypeDef;
declare const GRID_BOOLEAN_COL_DEF: GridColTypeDef;
declare const GRID_CHECKBOX_SELECTION_COL_DEF: GridColDef;
declare function gridDateFormatter({ value }: {
    value: GridCellValue;
}): string | number | boolean | object | null | undefined;
declare function gridDateTimeFormatter({ value }: {
    value: GridCellValue;
}): string | number | boolean | object | null | undefined;
declare const GRID_DATE_COL_DEF: GridColTypeDef;
declare const GRID_DATETIME_COL_DEF: GridColTypeDef;
declare const GRID_NUMERIC_COL_DEF: GridColTypeDef;
declare const GRID_SINGLE_SELECT_COL_DEF: GridColTypeDef;
declare const GRID_STRING_COL_DEF: GridColTypeDef;
declare type GridColumnTypesRecord = Record<GridColType, GridColTypeDef>;
declare const DEFAULT_GRID_COL_TYPE_KEY = "__default__";
declare const getGridDefaultColumnTypes: () => GridColumnTypesRecord;
interface CursorCoordinates {
    x: number;
    y: number;
}
/**
 * The ref type of the inner grid root container.
 */
declare type GridRootContainerRef = React.RefObject<HTMLDivElement>;
/**
 * The object containing the column properties of the rendering state.
 */
interface GridRenderColumnsProps {
    /**
     * The index of the first rendered column.
     */
    firstColIdx: number;
    /**
     * The index of the last rendered column.
     */
    lastColIdx: number;
    /**
     * The left offset required to position the viewport at the beginning of the first rendered column.
     */
    leftEmptyWidth: number;
    /**
     * The right offset required to position the viewport to the end of the last rendered column.
     */
    rightEmptyWidth: number;
}
/**
 * The object containing the row properties of the rendering state.
 */
interface GridRenderRowProps {
    /**
     * The rendering zone page calculated from the scroll position.
     */
    page: number;
    /**
     * The index of the first rendered row.
     */
    firstRowIdx: number;
    /**
     * The index of the last rendered row.
     */
    lastRowIdx: number;
}
/**
 * The object containing the pagination properties of the rendering state.
 */
interface GridRenderPaginationProps {
    /**
     * The current page if pagination is enabled.
     */
    paginationCurrentPage?: number;
    /**
     * The page size if pagination is enabled.
     */
    pageSize?: number;
}
/**
 * The full rendering state.
 */
declare type GridRenderContextProps = GridRenderColumnsProps & GridRenderRowProps & GridRenderPaginationProps;
interface GridCellProps {
    align: GridAlignment;
    className?: string;
    colIndex: number;
    field: string;
    rowId: GridRowId;
    formattedValue?: GridCellValue;
    hasFocus?: boolean;
    height: number;
    isEditable?: boolean;
    showRightBorder?: boolean;
    value?: GridCellValue;
    width: number;
    cellMode?: GridCellMode;
    children: React.ReactNode;
    tabIndex: 0 | -1;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onDragEnter?: React.DragEventHandler<HTMLDivElement>;
    onDragOver?: React.DragEventHandler<HTMLDivElement>;
    [x: string]: any;
}
declare function GridCell(props: GridCellProps): JSX.Element;
declare namespace GridCell {
    var propTypes: any;
}
interface GridEditInputCellProps {
    debounceMs?: number;
}
declare function GridEditInputCell(props: GridEditInputCellProps & GridRenderEditCellParams & Omit<InputBaseProps, 'id'>): JSX.Element;
declare namespace GridEditInputCell {
    var propTypes: any;
}
declare const renderEditInputCell: (params: any) => JSX.Element;
declare function GridEditSingleSelectCell(props: GridRenderEditCellParams & Omit<SelectProps, 'id'>): JSX.Element;
declare namespace GridEditSingleSelectCell {
    var propTypes: any;
}
declare const renderEditSingleSelectCell: (params: any) => JSX.Element;
declare type MenuPosition = 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top' | undefined;
interface GridMenuProps extends Omit<PopperProps, 'onKeyDown'> {
    open: boolean;
    target: React.ReactNode;
    onClickAway: ClickAwayListenerProps['onClickAway'];
    position?: MenuPosition;
    onExited?: GrowProps['onExited'];
}
declare const GridMenu: {
    (props: GridMenuProps): JSX.Element;
    propTypes: any;
};
declare type GridActionsCellProps = Pick<GridRenderCellParams, 'colDef' | 'id' | 'api'> & Pick<GridMenuProps, 'position'>;
declare const GridActionsCell: {
    (props: GridActionsCellProps): JSX.Element;
    propTypes: any;
};
declare const renderActionsCell: (params: GridRenderCellParams) => JSX.Element;
interface GridTreeDataGroupingCellProps extends GridRenderCellParams {
    hideDescendantCount?: boolean;
}
declare const GridTreeDataGroupingCell: {
    (props: GridTreeDataGroupingCellProps): JSX.Element;
    propTypes: any;
};
declare const GridDetailPanelToggleCell: {
    (props: GridRenderCellParams): JSX.Element;
    propTypes: any;
};
interface GridRootProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
}
declare const GridRoot: React.ForwardRefExoticComponent<GridRootProps & React.RefAttributes<HTMLDivElement>>;
declare type GridFooterContainerProps = React.HTMLAttributes<HTMLDivElement>;
declare const GridFooterContainer: React.ForwardRefExoticComponent<GridFooterContainerProps & React.RefAttributes<HTMLDivElement>>;
declare type GridOverlayProps = React.HTMLAttributes<HTMLDivElement>;
declare const GridOverlay: React.ForwardRefExoticComponent<GridOverlayProps & React.RefAttributes<HTMLDivElement>>;
declare type GridToolbarContainerProps = React.HTMLAttributes<HTMLDivElement>;
declare const GridToolbarContainer: React.ForwardRefExoticComponent<GridToolbarContainerProps & React.RefAttributes<HTMLDivElement>>;
declare enum GridColumnHeaderSeparatorSides {
    Left = "left",
    Right = "right"
}
interface GridColumnHeaderSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    resizable: boolean;
    resizing: boolean;
    height: number;
    side?: GridColumnHeaderSeparatorSides;
}
declare function GridColumnHeaderSeparatorRaw(props: GridColumnHeaderSeparatorProps): JSX.Element;
declare namespace GridColumnHeaderSeparatorRaw {
    var propTypes: any;
}
declare const GridColumnHeaderSeparator: React.MemoExoticComponent<typeof GridColumnHeaderSeparatorRaw>;
interface GridColumnHeaderItemProps {
    colIndex: number;
    column: GridStateColDef;
    columnMenuOpen: boolean;
    headerHeight: number;
    isDragging: boolean;
    isResizing: boolean;
    isLastColumn: boolean;
    extendRowFullWidth: boolean;
    sortDirection: GridSortDirection;
    sortIndex?: number;
    filterItemsCounter?: number;
    hasFocus?: boolean;
    tabIndex: 0 | -1;
    disableReorder?: boolean;
    separatorSide?: GridColumnHeaderSeparatorProps['side'];
}
declare function GridColumnHeaderItem(props: GridColumnHeaderItemProps): JSX.Element;
declare namespace GridColumnHeaderItem {
    var propTypes: any;
}
interface GridColumnHeaderSortIconProps {
    direction: GridSortDirection;
    index: number | undefined;
    sortingOrder: GridSortDirection[];
}
declare function GridColumnHeaderSortIconRaw(props: GridColumnHeaderSortIconProps): JSX.Element | null;
declare namespace GridColumnHeaderSortIconRaw {
    var propTypes: any;
}
declare const GridColumnHeaderSortIcon: React.MemoExoticComponent<typeof GridColumnHeaderSortIconRaw>;
interface GridColumnHeaderTitleProps {
    label: string;
    columnWidth: number;
    description?: string;
}
declare function GridColumnHeaderTitle(props: GridColumnHeaderTitleProps): JSX.Element;
declare namespace GridColumnHeaderTitle {
    var propTypes: any;
}
declare const GridCellCheckboxForwardRef: React.ForwardRefExoticComponent<GridCellParams<any, any, any> & React.RefAttributes<HTMLInputElement>>;
declare const GridCellCheckboxRenderer: React.MemoExoticComponent<React.ForwardRefExoticComponent<GridCellParams<any, any, any> & React.RefAttributes<HTMLInputElement>>>;
declare const GridHeaderCheckbox: React.ForwardRefExoticComponent<GridColumnHeaderParams & React.RefAttributes<HTMLInputElement>>;
declare const GridArrowUpwardIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridArrowDownwardIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridKeyboardArrowRight: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridExpandMoreIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridFilterListIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridFilterAltIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridSearchIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridMenuIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridCheckCircleIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridColumnIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridSeparatorIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridViewHeadlineIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridTableRowsIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridViewStreamIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridTripleDotsVerticalIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridCloseIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridAddIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridRemoveIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridLoadIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridDragIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridSaveAltIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridCheckIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
declare const GridMoreVertIcon: _mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};
interface GridFilterItemProps {
    column: GridColDef;
    onClick: (event: React.MouseEvent<any>) => void;
}
declare const GridColumnsMenuItem: {
    (props: GridFilterItemProps): JSX.Element | null;
    propTypes: any;
};
declare const GridFilterMenuItem: {
    (props: GridFilterItemProps): JSX.Element | null;
    propTypes: any;
};
interface GridColumnHeaderMenuProps {
    columnMenuId?: string;
    columnMenuButtonId?: string;
    ContentComponent: React.JSXElementConstructor<any>;
    contentComponentProps?: any;
    field: string;
    open: boolean;
    target: Element | null;
    onExited?: GridMenuProps['onExited'];
}
declare function GridColumnHeaderMenu({ columnMenuId, columnMenuButtonId, ContentComponent, contentComponentProps, field, open, target, onExited, }: GridColumnHeaderMenuProps): JSX.Element | null;
declare namespace GridColumnHeaderMenu {
    var propTypes: any;
}
interface GridColumnMenuProps extends React.HTMLAttributes<HTMLUListElement> {
    hideMenu: (event: React.SyntheticEvent) => void;
    currentColumn: GridColDef;
    open: boolean;
    id?: string;
    labelledby?: string;
}
declare const GridColumnMenu: React.ForwardRefExoticComponent<GridColumnMenuProps & React.RefAttributes<HTMLUListElement>>;
declare const HideGridColMenuItem: {
    (props: GridFilterItemProps): JSX.Element | null;
    propTypes: any;
};
declare const SortGridMenuItems: {
    (props: GridFilterItemProps): JSX.Element | null;
    propTypes: any;
};
declare const GridColumnMenuContainer: React.ForwardRefExoticComponent<GridColumnMenuProps & React.RefAttributes<HTMLUListElement>>;
interface GridColumnPinningMenuItemsProps {
    column?: GridColDef;
    onClick?: (event: React.MouseEvent<any>) => void;
}
declare const GridColumnPinningMenuItems: {
    (props: GridColumnPinningMenuItemsProps): JSX.Element | null;
    propTypes: any;
};
declare function GridColumnsPanel(): JSX.Element;
interface GridPanelClasses {
    /** Styles applied to the root element. */
    root: string;
    /** Styles applied to the paper element. */
    paper: string;
}
interface GridPanelProps extends InternalStandardProps<MUIStyledCommonProps<Theme> & PopperProps, 'children'> {
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<GridPanelClasses>;
    open: boolean;
}
declare const gridPanelClasses: Record<"panel" | "paper", string>;
declare const GridPanel: React.ForwardRefExoticComponent<Pick<GridPanelProps, "classes" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "anchorEl" | "container" | "disablePortal" | "keepMounted" | "modifiers" | "open" | "placement" | "popperOptions" | "popperRef" | "transition" | "theme" | "as" | "sx"> & React.RefAttributes<HTMLDivElement>>;
declare function GridPanelContent(props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>): JSX.Element;
declare function GridPanelFooter(props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>): JSX.Element;
declare function GridPanelHeader(props: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>): JSX.Element;
interface GridPanelWrapperProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>, MUIStyledCommonProps<Theme> {
}
declare function GridPanelWrapper(props: GridPanelWrapperProps): JSX.Element;
declare const GridPreferencesPanel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface GridFilterFormProps {
    item: GridFilterItem;
    hasMultipleFilters: boolean;
    showMultiFilterOperators?: boolean;
    multiFilterOperator?: GridLinkOperator;
    disableMultiFilterOperator?: boolean;
    focusElementRef?: React.Ref<any>;
    applyFilterChanges: (item: GridFilterItem) => void;
    applyMultiFilterOperatorChanges: (operator: GridLinkOperator) => void;
    deleteFilter: (item: GridFilterItem) => void;
    linkOperators?: GridLinkOperator[];
    columnsSort?: 'asc' | 'desc';
    deleteIconProps?: any;
    linkOperatorInputProps?: any;
    operatorInputProps?: any;
    columnInputProps?: any;
    valueInputProps?: any;
}
declare function GridFilterForm(props: GridFilterFormProps): JSX.Element;
declare namespace GridFilterForm {
    var propTypes: any;
}
declare const SUBMIT_FILTER_STROKE_TIME = 500;
interface GridTypeFilterInputValueProps extends GridFilterInputValueProps {
    type?: 'text' | 'number' | 'date' | 'datetime-local' | 'singleSelect';
}
declare function GridFilterInputValue(props: GridTypeFilterInputValueProps & TextFieldProps): JSX.Element;
declare namespace GridFilterInputValue {
    var propTypes: any;
}
declare type GridFilterInputDateProps = GridFilterInputValueProps & TextFieldProps & {
    type?: 'date' | 'datetime-local';
};
declare const SUBMIT_FILTER_DATE_STROKE_TIME = 500;
declare function GridFilterInputDate(props: GridFilterInputDateProps): JSX.Element;
declare namespace GridFilterInputDate {
    var propTypes: any;
}
declare type GridFilterInputSingleSelectProps = GridFilterInputValueProps & TextFieldProps & {
    type?: 'singleSelect';
};
declare function GridFilterInputSingleSelect(props: GridFilterInputSingleSelectProps): JSX.Element;
declare namespace GridFilterInputSingleSelect {
    var propTypes: any;
}
interface GridFilterPanelProps extends Pick<GridFilterFormProps, 'linkOperators' | 'columnsSort'> {
    sx?: SxProps$1<Theme>;
    filterFormProps?: Pick<GridFilterFormProps, 'columnsSort' | 'deleteIconProps' | 'linkOperatorInputProps' | 'operatorInputProps' | 'columnInputProps' | 'valueInputProps'>;
}
declare function GridFilterPanel(props: GridFilterPanelProps): JSX.Element;
declare namespace GridFilterPanel {
    var propTypes: any;
}
interface GridExportDisplayOptions {
    /**
     * If `true`, this export declare option will be removed from the GridToolbarExport menu.
     * @default false
     */
    disableToolbarButton?: boolean;
}
interface GridToolbarExportProps extends ButtonProps {
    csvOptions?: GridCsvExportOptions & GridExportDisplayOptions;
    printOptions?: GridPrintExportOptions & GridExportDisplayOptions;
}
declare const GridToolbarExport: React.ForwardRefExoticComponent<Pick<GridToolbarExportProps, "className" | "style" | "classes" | "form" | "slot" | "title" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "size" | "startIcon" | "variant" | "key" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value" | "csvOptions" | "printOptions"> & React.RefAttributes<HTMLButtonElement>>;
interface GridToolbarProps extends GridToolbarContainerProps, Pick<GridToolbarExportProps, 'csvOptions' | 'printOptions'> {
}
declare const GridToolbar: React.ForwardRefExoticComponent<GridToolbarProps & React.RefAttributes<HTMLDivElement>>;
declare const GridToolbarColumnsButton: React.ForwardRefExoticComponent<Pick<ButtonProps<"button", {}>, keyof _mui_material_OverridableComponent.CommonProps | "form" | "slot" | "title" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "size" | "startIcon" | "variant" | "key" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value"> & React.RefAttributes<HTMLButtonElement>>;
declare const GridToolbarDensitySelector: React.ForwardRefExoticComponent<Pick<ButtonProps<"button", {}>, keyof _mui_material_OverridableComponent.CommonProps | "form" | "slot" | "title" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "size" | "startIcon" | "variant" | "key" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value"> & React.RefAttributes<HTMLButtonElement>>;
interface GridToolbarFilterButtonProps extends Omit<TooltipProps, 'title' | 'children' | 'componentsProps'> {
    /**
     * The props used for each slot inside.
     * @default {}
     */
    componentsProps?: {
        button?: ButtonProps;
    };
}
declare const GridToolbarFilterButton: React.ForwardRefExoticComponent<Pick<GridToolbarFilterButtonProps, "classes" | "slot" | "style" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "sx" | "componentsProps" | "arrow" | "components" | "describeChild" | "disableFocusListener" | "disableHoverListener" | "disableInteractive" | "disableTouchListener" | "enterDelay" | "enterNextDelay" | "enterTouchDelay" | "followCursor" | "leaveDelay" | "leaveTouchDelay" | "onClose" | "onOpen" | "open" | "placement" | "PopperComponent" | "PopperProps" | "TransitionComponent" | "TransitionProps"> & React.RefAttributes<HTMLButtonElement>>;
declare const GridApiContext: React.Context<GridApiRef | undefined>;
interface AutoSizerSize {
    height: number;
    width: number;
}
interface AutoSizerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /**
     * Function responsible for rendering children.
     * @param {AutoSizerSize} size The grid's size.
     * @returns {React.ReactNode} The children to render.
     */
    children: (size: AutoSizerSize) => React.ReactNode;
    /**
     * Default height to use for initial render; useful for SSR.
     * @default null
     */
    defaultHeight?: number;
    /**
     * Default width to use for initial render; useful for SSR.
     * @default null
     */
    defaultWidth?: number;
    /**
     * If `true`, disable dynamic :height property.
     * @default false
     */
    disableHeight?: boolean;
    /**
     * If `true`, disable dynamic :width property.
     * @default false
     */
    disableWidth?: boolean;
    /**
     * Nonce of the inlined stylesheet for Content Security Policy.
     */
    nonce?: string;
    /**
     * Callback to be invoked on-resize.
     * @param {AutoSizerSize} size The grid's size.
     */
    onResize?: (size: AutoSizerSize) => void;
}
declare const GridAutoSizer: React.ForwardRefExoticComponent<AutoSizerProps & React.RefAttributes<HTMLDivElement>>;
declare const GridFooter: React.ForwardRefExoticComponent<GridFooterContainerProps & React.RefAttributes<HTMLDivElement>>;
declare const GridHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const GridLoadingOverlay: React.ForwardRefExoticComponent<GridOverlayProps & React.RefAttributes<HTMLDivElement>>;
declare const GridNoRowsOverlay: React.ForwardRefExoticComponent<GridOverlayProps & React.RefAttributes<HTMLDivElement>>;
declare const GridPagination: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface RowCountProps {
    rowCount: number;
    visibleRowCount: number;
}
declare const GridRowCount: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & RowCountProps & React.RefAttributes<HTMLDivElement>>;
interface GridRowProps {
    rowId: GridRowId;
    selected: boolean;
    index: number;
    rowHeight: number;
    containerWidth: number;
    row: GridRowModel;
    firstColumnToRender: number;
    lastColumnToRender: number;
    visibleColumns: GridStateColDef[];
    renderedColumns: GridStateColDef[];
    cellFocus: GridCellIdentifier | null;
    cellTabIndex: GridCellIdentifier | null;
    editRowsState: GridEditRowsModel;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}
declare function GridRow(props: React.HTMLAttributes<HTMLDivElement> & GridRowProps): JSX.Element;
declare namespace GridRow {
    var propTypes: any;
}
interface SelectedRowCountProps {
    selectedRowCount: number;
}
declare const GridSelectedRowCount: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & SelectedRowCountProps & React.RefAttributes<HTMLDivElement>>;
interface ScrollAreaProps {
    scrollDirection: 'left' | 'right';
}
declare function GridScrollAreaRaw(props: ScrollAreaProps): JSX.Element | null;
declare namespace GridScrollAreaRaw {
    var propTypes: any;
}
declare const GridScrollArea: React.MemoExoticComponent<typeof GridScrollAreaRaw>;
declare const GRID_EXPERIMENTAL_ENABLED: boolean;
declare const GRID_DEFAULT_LOCALE_TEXT: GridLocaleText;
declare const gridColumnMenuSelector: (state: GridState) => GridColumnMenuState;
declare const gridColumnResizeSelector: (state: GridState) => GridColumnResizeState;
declare const gridResizingColumnFieldSelector: OutputSelector<string>;
declare const gridPinnedColumnsSelector: (state: GridState) => GridPinnedColumns;
declare const gridColumnsSelector: (state: GridState) => GridColumnsState;
declare const allGridColumnsFieldsSelector: (state: GridState) => string[];
declare const gridColumnLookupSelector: (state: GridState) => GridColumnLookup;
declare const allGridColumnsSelector: OutputSelector<GridStateColDef[]>;
declare const gridColumnVisibilityModelSelector: OutputSelector<GridColumnVisibilityModel>;
declare const visibleGridColumnsSelector: OutputSelector<GridStateColDef[]>;
declare const gridVisibleColumnFieldsSelector: OutputSelector<string[]>;
declare const gridColumnsMetaSelector: OutputSelector<{
    totalWidth: number;
    positions: number[];
}>;
declare const filterableGridColumnsSelector: OutputSelector<GridStateColDef[]>;
declare const filterableGridColumnsIdsSelector: OutputSelector<string[]>;
declare const visibleGridColumnsLengthSelector: OutputSelector<number>;
declare const gridColumnsTotalWidthSelector: OutputSelector<number>;
/**
 * @deprecated Should have been internal only, you can inline the logic.
 */
declare const getGridColDef: (columnTypes: GridColumnTypesRecord, type: GridColType | undefined) => GridColTypeDef;
declare const gridDensitySelector: (state: GridState) => GridDensityState;
declare const gridDensityValueSelector: OutputSelector<GridDensity>;
declare const gridDensityRowHeightSelector: OutputSelector<number>;
declare const gridDensityHeaderHeightSelector: OutputSelector<number>;
declare const gridDensityFactorSelector: OutputSelector<number>;
declare const gridEditRowsStateSelector: (state: GridState) => GridEditRowsModel;
declare const gridFocusStateSelector: (state: GridState) => GridFocusState;
declare const gridFocusCellSelector: OutputSelector<GridCellIdentifier | null>;
declare const gridFocusColumnHeaderSelector: OutputSelector<GridColumnIdentifier | null>;
declare const gridTabIndexStateSelector: (state: GridState) => GridTabIndexState;
declare const gridTabIndexCellSelector: OutputSelector<GridCellIdentifier | null>;
declare const gridTabIndexColumnHeaderSelector: OutputSelector<GridColumnIdentifier | null>;
declare const gridPreferencePanelStateSelector: (state: GridState) => GridPreferencePanelState;
declare const gridRowsMetaSelector: (state: GridState) => GridRowsMetaState;
declare const gridRowsStateSelector: (state: GridState) => GridRowsState;
declare const gridRowCountSelector: OutputSelector<number>;
declare const gridTopLevelRowCountSelector: OutputSelector<number>;
declare const gridRowsLookupSelector: OutputSelector<GridRowsLookup>;
declare const gridRowTreeSelector: OutputSelector<GridRowTreeConfig>;
declare const gridRowGroupingNameSelector: OutputSelector<string>;
declare const gridRowTreeDepthSelector: OutputSelector<number>;
declare const gridRowIdsSelector: OutputSelector<GridRowId[]>;
declare const gridSelectionStateSelector: (state: GridState) => GridSelectionModel;
declare const selectedGridRowsCountSelector: OutputSelector<number>;
declare const selectedGridRowsSelector: OutputSelector<Map<GridRowId, {
    [key: string]: any;
}>>;
declare const selectedIdsLookupSelector: OutputSelector<{}>;
/**
 * @category Sorting
 * @ignore - do not document.
 */
declare const gridSortingStateSelector: (state: GridState) => GridSortingState;
/**
 * Get the id of the rows after the sorting process.
 * @category Sorting
 */
declare const gridSortedRowIdsSelector: OutputSelector<GridRowId[]>;
/**
 * Get the id and the model of the rows after the sorting process.
 * @category Sorting
 */
declare const gridSortedRowEntriesSelector: OutputSelector<{
    id: GridRowId;
    model: {
        [key: string]: any;
    };
}[]>;
/**
 * Get the current sorting model.
 * @category Sorting
 */
declare const gridSortModelSelector: OutputSelector<GridSortModel>;
declare type GridSortColumnLookup = Record<string, {
    sortDirection: GridSortDirection;
    sortIndex?: number;
}>;
/**
 * @category Sorting
 * @ignore - do not document.
 */
declare const gridSortColumnLookupSelector: OutputSelector<GridSortColumnLookup>;
declare const gridStringOrNumberComparator: GridComparatorFn;
declare const gridNumberComparator: GridComparatorFn;
declare const gridDateComparator: (value1: GridCellValue, value2: GridCellValue) => number;
declare const GRID_TREE_DATA_GROUPING_FIELD = "__tree_data_group__";
declare const GRID_DETAIL_PANEL_TOGGLE_FIELD = "__detail_panel_toggle__";
declare const GRID_DETAIL_PANEL_TOGGLE_COL_DEF: GridColDef;
declare const gridDetailPanelExpandedRowIdsSelector: (state: GridState) => GridRowId[];
declare const gridDetailPanelExpandedRowsContentCacheSelector: (state: GridState) => Record<GridRowId, React.ReactNode>;
declare const gridDetailPanelExpandedRowsHeightCacheSelector: (state: GridState) => Record<GridRowId, number>;
/**
 * @deprecated Use `apiRef.current` instead.
 */
declare const useGridApi: (apiRef: GridApiRef) => GridApi;
declare function useGridApiContext(): GridApiRef;
declare type UnregisterToken = {
    cleanupToken: number;
};
declare type UnsubscribeFn = () => void;
interface CleanupTracking {
    register(object: any, unsubscribe: UnsubscribeFn, unregisterToken: UnregisterToken): void;
    unregister(unregisterToken: UnregisterToken): void;
}
/**
 * Signal to the underlying logic what version of the public component API
 * of the data grid is exposed.
 */
declare enum GridSignature {
    DataGrid = "DataGrid",
    DataGridPro = "DataGridPro"
}
declare function createUseGridApiEventHandler(registry: CleanupTracking): <E extends "resize" | "debouncedResize" | "viewportInnerSizeChange" | "componentError" | "unmount" | "cellModeChange" | "cellClick" | "cellDoubleClick" | "cellMouseDown" | "cellMouseUp" | "cellKeyDown" | "cellFocusIn" | "cellFocusOut" | "cellDragEnter" | "cellDragOver" | "editCellPropsChange" | "cellEditCommit" | "cellEditStart" | "cellEditStop" | "rowEditStart" | "rowEditStop" | "rowEditCommit" | "cellNavigationKeyDown" | "rowClick" | "rowDoubleClick" | "rowMouseEnter" | "rowMouseLeave" | "editRowsModelChange" | "columnHeaderBlur" | "columnHeaderFocus" | "columnHeaderNavigationKeyDown" | "columnHeaderKeyDown" | "columnHeaderClick" | "columnHeaderDoubleClick" | "columnHeaderOver" | "columnHeaderOut" | "columnHeaderEnter" | "columnHeaderLeave" | "columnHeaderDragStart" | "columnHeaderDragOver" | "columnHeaderDragEnter" | "columnHeaderDragEnd" | "selectionChange" | "headerSelectionCheckboxChange" | "rowSelectionCheckboxChange" | "pageChange" | "pageSizeChange" | "rowGroupingModelChange" | "rowsScroll" | "rowsScrollEnd" | "columnSeparatorMouseDown" | "columnResize" | "columnWidthChange" | "columnResizeStart" | "columnResizeStop" | "columnOrderChange" | "rowsSet" | "rowExpansionChange" | "visibleRowsSet" | "columnsChange" | "detailPanelsExpandedRowIdsChange" | "pinnedColumnsChange" | "preProcessorRegister" | "preProcessorUnregister" | "rowGroupsPreProcessingChange" | "sortModelChange" | "filterModelChange" | "columnVisibilityModelChange" | "stateChange" | "columnVisibilityChange" | "virtualScrollerContentSizeChange">(apiRef: GridApiRef, eventName: E, handler?: GridEventListener<E> | undefined, options?: EventListenerOptions | undefined) => void;
declare const useGridApiEventHandler: <E extends "resize" | "debouncedResize" | "viewportInnerSizeChange" | "componentError" | "unmount" | "cellModeChange" | "cellClick" | "cellDoubleClick" | "cellMouseDown" | "cellMouseUp" | "cellKeyDown" | "cellFocusIn" | "cellFocusOut" | "cellDragEnter" | "cellDragOver" | "editCellPropsChange" | "cellEditCommit" | "cellEditStart" | "cellEditStop" | "rowEditStart" | "rowEditStop" | "rowEditCommit" | "cellNavigationKeyDown" | "rowClick" | "rowDoubleClick" | "rowMouseEnter" | "rowMouseLeave" | "editRowsModelChange" | "columnHeaderBlur" | "columnHeaderFocus" | "columnHeaderNavigationKeyDown" | "columnHeaderKeyDown" | "columnHeaderClick" | "columnHeaderDoubleClick" | "columnHeaderOver" | "columnHeaderOut" | "columnHeaderEnter" | "columnHeaderLeave" | "columnHeaderDragStart" | "columnHeaderDragOver" | "columnHeaderDragEnter" | "columnHeaderDragEnd" | "selectionChange" | "headerSelectionCheckboxChange" | "rowSelectionCheckboxChange" | "pageChange" | "pageSizeChange" | "rowGroupingModelChange" | "rowsScroll" | "rowsScrollEnd" | "columnSeparatorMouseDown" | "columnResize" | "columnWidthChange" | "columnResizeStart" | "columnResizeStop" | "columnOrderChange" | "rowsSet" | "rowExpansionChange" | "visibleRowsSet" | "columnsChange" | "detailPanelsExpandedRowIdsChange" | "pinnedColumnsChange" | "preProcessorRegister" | "preProcessorUnregister" | "rowGroupsPreProcessingChange" | "sortModelChange" | "filterModelChange" | "columnVisibilityModelChange" | "stateChange" | "columnVisibilityChange" | "virtualScrollerContentSizeChange">(apiRef: GridApiRef, eventName: E, handler?: GridEventListener<E> | undefined, options?: EventListenerOptions | undefined) => void;
declare function useGridApiOptionHandler<E extends GridEvents>(apiRef: GridApiRef, eventName: E, handler?: GridEventListener<E>): void;
declare function useGridApiMethod<T extends Partial<GridApi>>(apiRef: GridApiRef, apiMethods: T, apiName: string): void;
/**
 * Hook that instantiate a [[GridApiRef]].
 */
declare const useGridApiRef: () => GridApiRef;
declare function useGridLogger(apiRef: GridApiRef, name: string): Logger;
declare const useGridRootProps: <Props extends DataGridProcessedProps | DataGridProProcessedProps>() => Props;
declare function useGridScrollFn(apiRef: GridApiRef, renderingZoneElementRef: React.RefObject<HTMLDivElement>, columnHeadersElementRef: React.RefObject<HTMLDivElement>): [GridScrollFn];
declare const useGridSelector: <T>(apiRef: GridApiRef, selector: OutputSelector<T> | ((state: GridState) => T)) => T;
/**
 * @deprecated Use `apiRef.current.state`, `apiRef.current.setState` and `apiRef.current.forceUpdate` instead.
 */
declare const useGridState: (apiRef: GridApiRef) => readonly [GridState, (state: GridState | ((previousState: GridState) => GridState)) => boolean, () => void];
declare const useGridNativeEventListener: <E extends Event>(apiRef: GridApiRef, ref: React.MutableRefObject<HTMLDivElement | null> | (() => Element | undefined | null), eventName: string, handler?: ((event: E) => any) | undefined, options?: AddEventListenerOptions | undefined) => void;
interface Localization {
    components: {
        MuiDataGrid: {
            defaultProps: {
                localeText: Partial<GridLocaleText>;
            };
        };
    };
}
declare const arSD: Localization;
declare const bgBG: Localization;
declare const csCZ: Localization;
declare const daDK: Localization;
declare const deDE: Localization;
declare const elGR: Localization;
declare const enUS: Localization;
declare const esES: Localization;
declare const faIR: Localization;
declare const fiFI: Localization;
declare const frFR: Localization;
declare const heIL: Localization;
declare const itIT: Localization;
declare const jaJP: Localization;
declare const koKR: Localization;
declare const nlNL: Localization;
declare const plPL: Localization;
declare const ptBR: Localization;
declare const ruRU: Localization;
declare const skSK: Localization;
declare const trTR: Localization;
declare const ukUA: Localization;
declare const viVN: Localization;
declare const zhCN: Localization;
declare const DataGrid: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<Partial<DataGridPropsWithDefaultValues> & DataGridPropsWithComplexDefaultValueBeforeProcessing & DataGridPropsWithoutDefaultValue, DataGridForcedPropsKey> & {
    pagination?: true | undefined;
} & React.RefAttributes<HTMLDivElement>>>;
declare const useDataGridComponent: (props: DataGridProcessedProps) => GridApiRef;
declare const MAX_PAGE_SIZE = 100;
export { AutoSizerProps, AutoSizerSize, CursorCoordinates, DEFAULT_GRID_COL_TYPE_KEY, DataGrid, DataGridProps, ElementSize, GRID_ACTIONS_COL_DEF, GRID_BOOLEAN_COL_DEF, GRID_CHECKBOX_SELECTION_COL_DEF, GRID_DATETIME_COL_DEF, GRID_DATE_COL_DEF, GRID_DEFAULT_LOCALE_TEXT, GRID_DETAIL_PANEL_TOGGLE_COL_DEF, GRID_DETAIL_PANEL_TOGGLE_FIELD, GRID_EXPERIMENTAL_ENABLED, GRID_NUMERIC_COL_DEF, GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD, GRID_SINGLE_SELECT_COL_DEF, GRID_STRING_COL_DEF, GRID_TREE_DATA_GROUPING_FIELD, GridActionsCell, GridActionsCellItem, GridActionsCellItemProps, GridActionsColDef, GridAddIcon, GridAlignment, GridApi, GridApiContext, GridApiRef, GridArrowDownwardIcon, GridArrowUpwardIcon, GridAutoSizer, GridBody, GridCallbackDetails, GridCell, GridCellCheckboxForwardRef, GridCellCheckboxRenderer, GridCellClassFn, GridCellClassNamePropType, GridCellEditCommitParams, GridCellEventLookup, GridCellIdentifier, GridCellIndexCoordinates, GridCellMode, GridCellModes, GridCellParams, GridCellProps, GridCellValue, GridCheckCircleIcon, GridCheckIcon, GridClassKey, GridClasses, GridClipboardApi, GridCloseIcon, GridColDef, GridColType, GridColTypeDef, GridColumnApi, GridColumnHeaderClassFn, GridColumnHeaderClassNamePropType, GridColumnHeaderEventLookup, GridColumnHeaderIndexCoordinates, GridColumnHeaderItem, GridColumnHeaderMenu, GridColumnHeaderMenuProps, GridColumnHeaderParams, GridColumnHeaderSeparator, GridColumnHeaderSeparatorProps, GridColumnHeaderSeparatorSides, GridColumnHeaderSortIcon, GridColumnHeaderSortIconProps, GridColumnHeaderTitle, GridColumnHeaderTitleProps, GridColumnIcon, GridColumnIdentifier, GridColumnLookup, GridColumnMenu, GridColumnMenuApi, GridColumnMenuContainer, GridColumnMenuProps, GridColumnMenuState, GridColumnOrderChangeParams, GridColumnPinningApi, GridColumnPinningMenuItems, GridColumnPinningState, GridColumnReorderState, GridColumnResizeParams, GridColumnResizeState, GridColumnTypesRecord, GridColumnVisibilityChangeParams, GridColumnVisibilityModel, GridColumns, GridColumnsInitialState, GridColumnsMenuItem, GridColumnsMeta, GridColumnsPanel, GridColumnsState, GridCommitCellChangeParams, GridComparatorFn, GridControlledStateEventLookup, GridCoreApi, GridCsvExportApi, GridCsvExportOptions, GridCsvGetRowsToExportParams, GridDensity, GridDensityApi, GridDensityOption, GridDensityState, GridDensityTypes, GridDetailPanelApi, GridDetailPanelToggleCell, GridDimensions, GridDimensionsApi, GridDisableVirtualizationApi, GridDragIcon, GridEditCellProps, GridEditCellPropsParams, GridEditCellValueParams, GridEditInputCell, GridEditMode, GridEditModes, GridEditRowApi, GridEditRowProps, GridEditRowsModel, GridEditSingleSelectCell, GridEditingApi, GridEnrichedColDef, GridErrorHandler, GridEventListener, GridEventLookup, GridEventPublisher, GridEvents, GridEventsStr, GridExpandMoreIcon, GridExportFormat, GridExportOptions, GridFeatureMode, GridFeatureModeConstant, GridFilterActiveItemsLookup, GridFilterAltIcon, GridFilterApi, GridFilterForm, GridFilterFormProps, GridFilterInitialState, GridFilterInputDate, GridFilterInputDateProps, GridFilterInputMultipleSingleSelect, GridFilterInputMultipleSingleSelectProps, GridFilterInputMultipleValue, GridFilterInputMultipleValueProps, GridFilterInputSingleSelect, GridFilterInputSingleSelectProps, GridFilterInputValue, GridFilterInputValueProps, GridFilterItem, GridFilterItemProps, GridFilterListIcon, GridFilterMenuItem, GridFilterModel, GridFilterOperator, GridFilterPanel, GridFilterPanelProps, GridFilterState, GridFocusApi, GridFocusState, GridFooter, GridFooterContainer, GridFooterContainerProps, GridFooterPlaceholder, GridGroupingColDefOverride, GridGroupingColDefOverrideParams, GridGroupingValueGetterParams, GridHeader, GridHeaderCheckbox, GridHeaderPlaceholder, GridHeaderSelectionCheckboxParams, GridIconSlotsComponent, GridInitialState, GridInputSelectionModel, GridKeyValue, GridKeyboardArrowRight, GridLinkOperator, GridLoadIcon, GridLoadingOverlay, GridLocaleText, GridLocaleTextApi, GridMenu, GridMenuIcon, GridMenuProps, GridMoreVertIcon, GridNativeColTypes, GridNoRowsOverlay, GridOverlay, GridOverlayProps, GridOverlays, GridPagination, GridPaginationApi, GridPaginationInitialState, GridPaginationState, GridPanel, GridPanelClasses, GridPanelContent, GridPanelFooter, GridPanelHeader, GridPanelProps, GridPanelWrapper, GridParamsApi, GridPinnedColumns, GridPinnedPosition, GridPreProcessEditCellProps, GridPreferencePanelInitialState, GridPreferencePanelState, GridPreferencePanelsValue, GridPreferencesPanel, GridPreferencesPanelApi, GridPrintExportApi, GridPrintExportOptions, GridRemoveIcon, GridRenderCellParams, GridRenderColumnsProps, GridRenderContext, GridRenderContextProps, GridRenderEditCellParams, GridRenderPaginationProps, GridRenderRowProps, GridRoot, GridRootContainerRef, GridRootProps, GridRow, GridRowApi, GridRowCount, GridRowData, GridRowEntry, GridRowEventLookup, GridRowGroupingApi, GridRowGroupingInitialState, GridRowGroupingModel, GridRowGroupingState, GridRowHeightParams, GridRowHeightReturnValue, GridRowId, GridRowIdGetter, GridRowMode, GridRowModel, GridRowModelUpdate, GridRowModes, GridRowParams, GridRowProps, GridRowScrollEndParams, GridRowSelectionCheckboxParams, GridRowTreeConfig, GridRowTreeNodeConfig, GridRowsLookup, GridRowsMeta, GridRowsMetaApi, GridRowsProp, GridRowsState, GridSaveAltIcon, GridScrollApi, GridScrollArea, GridScrollFn, GridScrollParams, GridSearchIcon, GridSelectedRowCount, GridSelectionApi, GridSelectionModel, GridSeparatorIcon, GridSignature, GridSlotsComponent, GridSlotsComponentsProps, GridSortApi, GridSortCellParams, GridSortColumnLookup, GridSortDirection, GridSortItem, GridSortModel, GridSortModelParams, GridSortingInitialState, GridSortingState, GridState, GridStateApi, GridStateChangeParams, GridStateColDef, GridTabIndexState, GridTableRowsIcon, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarContainerProps, GridToolbarDensitySelector, GridToolbarExport, GridToolbarExportProps, GridToolbarFilterButton, GridToolbarFilterButtonProps, GridToolbarProps, GridTranslationKeys, GridTreeDataGroupingCell, GridTripleDotsVerticalIcon, GridTypeFilterInputValueProps, GridUpdateAction, GridValueFormatterParams, GridValueGetterFullParams, GridValueGetterParams, GridValueOptionsParams, GridValueSetterParams, GridViewHeadlineIcon, GridViewStreamIcon, GridVirtualScrollerApi, HideGridColMenuItem, Logger, MAX_PAGE_SIZE, MuiBaseEvent, MuiEvent, SUBMIT_FILTER_DATE_STROKE_TIME, SUBMIT_FILTER_STROKE_TIME, SortGridMenuItems, allGridColumnsFieldsSelector, allGridColumnsSelector, arSD, bgBG, checkGridRowIdIsValid, createUseGridApiEventHandler, csCZ, daDK, deDE, elGR, enUS, esES, faIR, fiFI, filterableGridColumnsIdsSelector, filterableGridColumnsSelector, frFR, getDataGridUtilityClass, getDefaultGridFilterModel, getGridBooleanOperators, getGridColDef, getGridDateOperators, getGridDefaultColumnTypes, getGridNumericColumnOperators, getGridNumericOperators, getGridSingleSelectOperators, getGridStringOperators, getRowGroupingFieldFromGroupingCriteria, gridClasses, gridColumnLookupSelector, gridColumnMenuSelector, gridColumnReorderDragColSelector, gridColumnReorderSelector, gridColumnResizeSelector, gridColumnVisibilityModelSelector, gridColumnsMetaSelector, gridColumnsSelector, gridColumnsTotalWidthSelector, gridDateComparator, gridDateFormatter, gridDateTimeFormatter, gridDensityFactorSelector, gridDensityHeaderHeightSelector, gridDensityRowHeightSelector, gridDensitySelector, gridDensityValueSelector, gridDetailPanelExpandedRowIdsSelector, gridDetailPanelExpandedRowsContentCacheSelector, gridDetailPanelExpandedRowsHeightCacheSelector, gridEditRowsStateSelector, gridFilterActiveItemsLookupSelector, gridFilterActiveItemsSelector, gridFilterModelSelector, gridFilterStateSelector, gridFilteredDescendantCountLookupSelector, gridFilteredRowsLookupSelector, gridFilteredSortedRowEntriesSelector, gridFilteredSortedRowIdsSelector, gridFocusCellSelector, gridFocusColumnHeaderSelector, gridFocusStateSelector, gridNumberComparator, gridPageCountSelector, gridPageSelector, gridPageSizeSelector, gridPaginatedVisibleSortedGridRowEntriesSelector, gridPaginatedVisibleSortedGridRowIdsSelector, gridPaginationRowRangeSelector, gridPaginationSelector, gridPanelClasses, gridPinnedColumnsSelector, gridPreferencePanelStateSelector, gridResizingColumnFieldSelector, gridRowCountSelector, gridRowGroupingModelSelector, gridRowGroupingNameSelector, gridRowGroupingSanitizedModelSelector, gridRowGroupingStateSelector, gridRowIdsSelector, gridRowTreeDepthSelector, gridRowTreeSelector, gridRowsLookupSelector, gridRowsMetaSelector, gridRowsStateSelector, gridSelectionStateSelector, gridSortColumnLookupSelector, gridSortModelSelector, gridSortedRowEntriesSelector, gridSortedRowIdsSelector, gridSortingStateSelector, gridStringOrNumberComparator, gridTabIndexCellSelector, gridTabIndexColumnHeaderSelector, gridTabIndexStateSelector, gridTopLevelRowCountSelector, gridVisibleColumnFieldsSelector, gridVisibleRowCountSelector, gridVisibleRowsLookupSelector, gridVisibleRowsSelector, gridVisibleSortedRowEntriesSelector, gridVisibleSortedRowIdsSelector, gridVisibleSortedTopLevelRowEntriesSelector, gridVisibleTopLevelRowCountSelector, heIL, itIT, jaJP, koKR, nlNL, plPL, ptBR, renderActionsCell, renderEditInputCell, renderEditSingleSelectCell, ruRU, selectedGridRowsCountSelector, selectedGridRowsSelector, selectedIdsLookupSelector, skSK, trTR, ukUA, useDataGridComponent, useGridApi, useGridApiContext, useGridApiEventHandler, useGridApiMethod, useGridApiOptionHandler, useGridApiRef, useGridLogger, useGridNativeEventListener, useGridRootProps, useGridScrollFn, useGridSelector, useGridState, viVN, visibleGridColumnsLengthSelector, visibleGridColumnsSelector, zhCN };
