import { ComposedStyleFunction, StyleFunction, PropsFor, SimpleStyleFunction, borders, display, flexbox, grid, palette, positions, shadows, sizing, typography } from './Box';
export {};
export declare const border: SimpleStyleFunction<'border'>;
export declare const borderTop: SimpleStyleFunction<'borderTop'>;
export declare const borderRight: SimpleStyleFunction<'borderRight'>;
export declare const borderBottom: SimpleStyleFunction<'borderBottom'>;
export declare const borderLeft: SimpleStyleFunction<'borderLeft'>;
export declare const borderColor: SimpleStyleFunction<'borderColor'>;
export declare const borderRadius: SimpleStyleFunction<'borderRadius'>;
export declare type BordersProps = PropsFor<typeof borders>;
declare type DefaultBreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare function handleBreakpoints<Props>(props: Props, propValue: any, styleFromPropValue: (value: any) => any): any;
/**
 * @returns An enhanced stylefunction that considers breakpoints
 */
export declare function breakpoints<Props, Breakpoints extends string = DefaultBreakPoints>(styleFunction: StyleFunction<Props>): StyleFunction<Partial<Record<Breakpoints, Props>> & Props>;
export declare function mergeBreakpointsInOrder(breakpointsInput: {
    keys: string[];
    up: (key: string) => string;
}, ...styles: object[]): object;
export declare function compose<T extends Array<StyleFunction<any>>>(...args: T): ComposedStyleFunction<T>;
export declare type DisplayProps = PropsFor<typeof display>;
export declare type FlexboxProps = PropsFor<typeof flexbox>;
export declare type GridProps = PropsFor<typeof grid>;
export declare const color: SimpleStyleFunction<'color'>;
export declare const bgcolor: SimpleStyleFunction<'bgcolor'>;
export declare type PaletteProps = PropsFor<typeof palette>;
export declare type PositionsProps = PropsFor<typeof positions>;
export declare type ShadowsProps = PropsFor<typeof shadows>;
export declare const width: SimpleStyleFunction<'width'>;
export declare const maxWidth: SimpleStyleFunction<'maxWidth'>;
export declare const minWidth: SimpleStyleFunction<'minWidth'>;
export declare const height: SimpleStyleFunction<'height'>;
export declare const maxHeight: SimpleStyleFunction<'maxHeight'>;
export declare const minHeight: SimpleStyleFunction<'minHeight'>;
export declare const sizeWidth: SimpleStyleFunction<'sizeWidth'>;
export declare const sizeHeight: SimpleStyleFunction<'sizeHeight'>;
export declare const boxSizing: SimpleStyleFunction<'boxSizing'>;
export declare type SizingProps = PropsFor<typeof sizing>;
export declare const typographyVariant: SimpleStyleFunction<'typography'>;
export declare const fontFamily: SimpleStyleFunction<'fontFamily'>;
export declare const fontSize: SimpleStyleFunction<'fontSize'>;
export declare const fontStyle: SimpleStyleFunction<'fontStyle'>;
export declare const fontWeight: SimpleStyleFunction<'fontWeight'>;
export declare const letterSpacing: SimpleStyleFunction<'letterSpacing'>;
export declare const lineHeight: SimpleStyleFunction<'lineHeight'>;
export declare const textAlign: SimpleStyleFunction<'textAlign'>;
export declare const textTransform: SimpleStyleFunction<'textTransform'>;
export declare type TypographyProps = PropsFor<typeof typography>;
export declare function unstable_getThemeValue(prop: string, value: any, theme: object): any;
/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 */
export declare type ResponsiveStyleValue<T> = T | Array<T | null> | {
    [key: string]: T | null;
};
export { DefaultTheme } from '@mui/private-theming';
export { css, keyframes, GlobalStyles, GlobalStylesProps, StyledEngineProvider, Interpolation, CSSInterpolation, CSSObject, } from '@mui/styled-engine';
export * from './style';
export * from './spacing';
export { default as unstable_styleFunctionSx, unstable_createStyleFunctionSx, extendSxProp as unstable_extendSxProp, } from './styleFunctionSx';
export * from './styleFunctionSx';
export { default as experimental_sx } from './sx';
export { default as Box } from './Box';
export * from './Box';
export { default as createBox } from './createBox';
export * from './createBox';
export { default as createStyled } from './createStyled';
export * from './createStyled';
export { default as styled } from './styled';
export * from './styled';
export { default as createTheme } from './createTheme';
export * from './createTheme';
export { default as createBreakpoints } from './createTheme/createBreakpoints';
export * from './createTheme/createBreakpoints';
export { default as createSpacing } from './createTheme/createSpacing';
export { SpacingOptions, Spacing } from './createTheme/createSpacing';
export { default as shape } from './createTheme/shape';
export * from './createTheme/shape';
export { default as useThemeProps, getThemeProps } from './useThemeProps';
export { default as useTheme } from './useTheme';
export * from './useTheme';
export { default as useThemeWithoutDefault } from './useThemeWithoutDefault';
export * from './useThemeWithoutDefault';
export * from './colorManipulator';
export { default as ThemeProvider } from './ThemeProvider';
export * from './ThemeProvider';
export { default as unstable_createCssVarsProvider } from './cssVars';
export { default as unstable_createGetCssVar } from './cssVars/createGetCssVar';
export * from './cssVars';
