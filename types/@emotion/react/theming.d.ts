import * as React from 'react';
import { Theme } from '@emotion/react';
import { DistributiveOmit, PropsOf } from './helper';
export interface ThemeProviderProps {
    theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
    children?: React.ReactNode;
}
export interface ThemeProvider {
    (props: ThemeProviderProps): React.ReactElement;
}
export declare type withTheme = <C extends React.ComponentType<React.ComponentProps<C>>>(component: C) => React.FC<DistributiveOmit<PropsOf<C>, 'theme'> & {
    theme?: Theme;
}>;
export declare function useTheme(): Theme;
export declare const ThemeProvider: ThemeProvider;
export declare const withTheme: withTheme;
export declare type WithTheme<P, T> = P extends {
    theme: infer Theme;
} ? P & {
    theme: Exclude<Theme, undefined>;
} : P & {
    theme: T;
};
