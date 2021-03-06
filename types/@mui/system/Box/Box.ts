import * as React from 'react';
import { OverridableComponent, OverrideProps } from '@mui/types';
import { Theme } from '../createTheme';
import { SxProps, AllSystemCSSProperties, ResponsiveStyleValue, OverwriteCSSProperties, AliasesCSSProperties } from '../styleFunctionSx';
export declare type PropsFor<SomeStyleFunction> = SomeStyleFunction extends StyleFunction<infer Props> ? Props : never;
export declare type StyleFunction<Props> = (props: Props) => any;
export declare type SimpleStyleFunction<PropKey extends keyof any> = StyleFunction<Partial<Record<PropKey, any>>> & {
    filterProps: string[];
};
export declare const borders: SimpleStyleFunction<'border' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft' | 'borderColor' | 'borderRadius'>;
export declare const display: SimpleStyleFunction<'display' | 'displayPrint' | 'overflow' | 'textOverflow' | 'visibility' | 'whiteSpace'>;
export declare const flexbox: SimpleStyleFunction<'flexBasis' | 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'alignContent' | 'order' | 'flex' | 'flexGrow' | 'flexShrink' | 'alignSelf' | 'justifyItems' | 'justifySelf'>;
export declare const grid: SimpleStyleFunction<'gap' | 'columnGap' | 'rowGap' | 'gridColumn' | 'gridRow' | 'gridAutoFlow' | 'gridAutoColumns' | 'gridAutoRows' | 'gridTemplateColumns' | 'gridTemplateRows' | 'gridTemplateAreas' | 'gridArea'>;
export declare const palette: SimpleStyleFunction<'bgcolor' | 'color'>;
export declare const positions: SimpleStyleFunction<'zIndex' | 'position' | 'top' | 'right' | 'bottom' | 'left'>;
export declare const shadows: SimpleStyleFunction<'boxShadow'>;
export declare const sizing: SimpleStyleFunction<'width' | 'maxWidth' | 'minWidth' | 'height' | 'maxHeight' | 'minHeight' | 'sizeWidth' | 'sizeHeight' | 'boxSizing'>;
export declare const spacing: SimpleStyleFunction<'m' | 'mt' | 'mr' | 'mb' | 'ml' | 'mx' | 'my' | 'p' | 'pt' | 'pr' | 'pb' | 'pl' | 'px' | 'py' | 'margin' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft' | 'marginX' | 'marginY' | 'padding' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft' | 'paddingX' | 'paddingY'>;
export declare const typography: SimpleStyleFunction<'typography' | 'fontFamily' | 'fontSize' | 'fontStyle' | 'fontWeight' | 'letterSpacing' | 'lineHeight' | 'textAlign' | 'textTransform'>;
/**
 * given a list of StyleFunction return the intersection of the props each individual
 * StyleFunction requires.
 *
 * If `firstFn` requires { color: string } and `secondFn` requires { spacing: number }
 * their composed function requires { color: string, spacing: number }
 */
declare type ComposedArg<T> = T extends Array<(arg: infer P) => any> ? P : never;
declare type ComposedOwnerState<T> = ComposedArg<T>;
export declare type ComposedStyleFunction<T extends Array<StyleFunction<any>>> = StyleFunction<ComposedOwnerState<T>> & {
    filterProps: string[];
};
export interface CustomSystemProps extends AliasesCSSProperties, OverwriteCSSProperties {
}
export declare type SimpleSystemKeys = keyof PropsFor<ComposedStyleFunction<[
    typeof borders,
    typeof display,
    typeof flexbox,
    typeof grid,
    typeof palette,
    typeof positions,
    typeof shadows,
    typeof sizing,
    typeof spacing,
    typeof typography
]>>;
declare type StandardSystemKeys = Extract<SimpleSystemKeys, keyof AllSystemCSSProperties>;
export declare type SystemProps<Theme extends object = {}> = {
    [K in StandardSystemKeys]?: ResponsiveStyleValue<AllSystemCSSProperties[K]> | ((theme: Theme) => ResponsiveStyleValue<AllSystemCSSProperties[K]>);
};
export interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'> {
    props: P & SystemProps<Theme> & {
        children?: React.ReactNode;
        component?: React.ElementType;
        ref?: React.Ref<unknown>;
        sx?: SxProps<Theme>;
    };
    defaultComponent: D;
}
declare const Box: OverridableComponent<BoxTypeMap>;
export declare type BoxProps<D extends React.ElementType = BoxTypeMap['defaultComponent'], P = {}> = OverrideProps<BoxTypeMap<P, D>, D>;
export default Box;
