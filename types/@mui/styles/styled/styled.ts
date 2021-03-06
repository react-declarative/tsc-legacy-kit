import { DistributiveOmit, Overwrite } from '@mui/types';
import { CreateCSSProperties, StyledComponentProps, WithStylesOptions } from '@mui/styles/withStyles';
import * as React from 'react';
import { DefaultTheme } from '../defaultTheme';
export declare type StyledComponent<P extends {}> = (props: P) => React.ReactElement<P, any> | null;
/**
 * @internal
 */
export declare type ComponentCreator<Component extends React.ElementType> = <Theme = DefaultTheme, Props extends {} = React.ComponentPropsWithoutRef<Component>>(styles: CreateCSSProperties<Props> | ((props: {
    theme: Theme;
} & Props) => CreateCSSProperties<Props>), options?: WithStylesOptions<Theme>) => StyledComponent<DistributiveOmit<JSX.LibraryManagedAttributes<Component, React.ComponentProps<Component>>, 'classes' | 'className'> & StyledComponentProps<'root'> & Overwrite<Props, {
    className?: string;
    theme?: Theme;
}>>;
export interface StyledProps {
    className: string;
}
export type styled = <Component extends React.ElementType>(Component: Component) => ComponentCreator<Component>;
export default styled;
