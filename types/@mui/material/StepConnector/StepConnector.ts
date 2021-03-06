import * as React from 'react';
import { SxProps } from '@mui/system';
import { InternalStandardProps as StandardProps } from '..';
import { Theme } from '../styles';
import { StepConnectorClasses } from './stepConnectorClasses';
export declare type StepConnectorIcon = React.ReactElement | string | number;
export interface StepConnectorProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<StepConnectorClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
}
export declare type StepConnectorClasskey = keyof NonNullable<StepConnectorProps['classes']>;
/**
 *
 * Demos:
 *
 * - [Steppers](https://mui.com/components/steppers/)
 *
 * API:
 *
 * - [StepConnector API](https://mui.com/api/step-connector/)
 */
export type StepConnector = (props: StepConnectorProps) => JSX.Element;
export default StepConnector;