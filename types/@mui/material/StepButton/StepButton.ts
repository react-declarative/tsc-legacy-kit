import * as React from 'react';
import { SxProps } from '@mui/system';
import { ButtonBaseTypeMap, ExtendButtonBase, ExtendButtonBaseTypeMap } from '../ButtonBase';
import { OverrideProps } from '../OverridableComponent';
import { Theme } from '../styles';
import { StepButtonClasses } from './stepButtonClasses';
/**
 * @deprecated use `StepButtonProps['icon']` instead
 */
export declare type StepButtonIcon = React.ReactNode;
export declare type StepButtonTypeMap<P, D extends React.ElementType> = ExtendButtonBaseTypeMap<{
    props: P & {
        /**
         * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
         */
        children?: React.ReactNode;
        /**
         * Override or extend the styles applied to the component.
         */
        classes?: Partial<StepButtonClasses>;
        /**
         * The icon displayed by the step label.
         */
        icon?: React.ReactNode;
        /**
         * The optional node to display.
         */
        optional?: React.ReactNode;
        /**
         * The system prop that allows defining system overrides as well as additional CSS styles.
         */
        sx?: SxProps<Theme>;
    };
    defaultComponent: D;
    ignoredProps: 'disabled';
}>;
/**
 *
 * Demos:
 *
 * - [Steppers](https://mui.com/components/steppers/)
 *
 * API:
 *
 * - [StepButton API](https://mui.com/api/step-button/)
 * - inherits [ButtonBase API](https://mui.com/api/button-base/)
 */
declare const StepButton: ExtendButtonBase<StepButtonTypeMap<{}, ButtonBaseTypeMap['defaultComponent']>>;
export declare type StepButtonClasskey = keyof NonNullable<StepButtonProps['classes']>;
export declare type StepButtonProps<D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'], P = {}> = OverrideProps<StepButtonTypeMap<P, D>, D>;
export default StepButton;