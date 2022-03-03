import * as React from 'react';
import { SxProps } from '@mui/system';
import { OverrideProps } from '@mui/types';
import { ExtendModalUnstyledTypeMap, ExtendModalUnstyled } from '@mui/base/ModalUnstyled';
import { Theme } from '../styles';
import { BackdropProps } from '../Backdrop';
export declare type ModalTypeMap<D extends React.ElementType = 'div', P = {}> = ExtendModalUnstyledTypeMap<{
    props: P & {
        /**
         * A backdrop component. This prop enables custom backdrop rendering.
         * @default styled(Backdrop, {
         *   name: 'MuiModal',
         *   slot: 'Backdrop',
         *   overridesResolver: (props, styles) => {
         *     return styles.backdrop;
         *   },
         * })({
         *   zIndex: -1,
         * })
         */
        BackdropComponent?: React.ElementType<BackdropProps>;
        /**
         * Props applied to the [`Backdrop`](/api/backdrop/) element.
         */
        BackdropProps?: Partial<BackdropProps>;
        /**
         * The system prop that allows defining system overrides as well as additional CSS styles.
         */
        sx?: SxProps<Theme>;
    };
    defaultComponent: D;
}>;
declare type ModalRootProps = NonNullable<ModalTypeMap['props']['componentsProps']>['root'];
export declare const ModalRoot: React.FC<ModalRootProps>;
export declare type ModalClassKey = keyof NonNullable<ModalTypeMap['props']['classes']>;
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * *   [Dialog](https://mui.com/api/dialog/)
 * *   [Drawer](https://mui.com/api/drawer/)
 * *   [Menu](https://mui.com/api/menu/)
 * *   [Popover](https://mui.com/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](https://mui.com/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 *
 * Demos:
 *
 * - [Modal](https://mui.com/components/modal/)
 *
 * API:
 *
 * - [Modal API](https://mui.com/api/modal/)
 */
declare const Modal: ExtendModalUnstyled<ModalTypeMap>;
export declare type ModalClasses = Record<ModalClassKey, string>;
export declare const modalClasses: ModalClasses;
export declare type ModalProps<D extends React.ElementType = ModalTypeMap['defaultComponent'], P = {}> = OverrideProps<ModalTypeMap<D, P>, D>;
export default Modal;
