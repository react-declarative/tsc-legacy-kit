import * as React from 'react';
import { DistributiveOmit } from '@mui/types';
import { StyledComponentProps } from './styles';
/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
    <C extends React.ElementType>(props: {
        /**
         * The component used for the root node.
         * Either a string to use a HTML element or a component.
         */
        component: C;
    } & OverrideProps<M, C>): JSX.Element;
    (props: DefaultComponentProps<M>): JSX.Element;
}
/**
 * Props of the component if `component={Component}` is used.
 */
export declare type OverrideProps<M extends OverridableTypeMap, C extends React.ElementType> = (BaseProps<M> & DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>);
/**
 * Props if `component={Component}` is NOT used.
 */
export declare type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> & DistributiveOmit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>;
/**
 * Props defined on the component (+ common material-ui props).
 */
export declare type BaseProps<M extends OverridableTypeMap> = M['props'] & CommonProps;
/**
 * Props that are valid for material-ui components.
 */
export interface CommonProps extends StyledComponentProps<never> {
    className?: string;
    style?: React.CSSProperties;
}
export interface OverridableTypeMap {
    props: {};
    defaultComponent: React.ElementType;
}
