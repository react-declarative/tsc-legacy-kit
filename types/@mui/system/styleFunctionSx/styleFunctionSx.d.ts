import * as CSS from 'csstype';
import { StandardCSSProperties } from './StandardCssProperties';
import { AliasesCSSProperties } from './AliasesCSSProperties';
import { OverwriteCSSProperties } from './OverwriteCSSProperties';
/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 */
export declare type ResponsiveStyleValue<T> = T | Array<T | null> | {
    [key: string]: T | null;
};
/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...).
 */
export declare type CSSPseudoSelectorProps<Theme extends object = {}> = {
    [K in CSS.Pseudos]?: ((theme: Theme) => SystemStyleObject<Theme>) | SystemStyleObject<Theme>;
};
/**
 * Map all nested selectors.
 */
export interface CSSSelectorObject<Theme extends object = {}> {
    [cssSelector: string]: ((theme: Theme) => SystemStyleObject<Theme>) | SystemStyleObject<Theme>;
}
declare type CssVariableType = string | number;
/**
 * Map all nested selectors and CSS variables.
 */
export interface CSSSelectorObjectOrCssVariables<Theme extends object = {}> {
    [cssSelectorOrVariable: string]: ((theme: Theme) => SystemStyleObject<Theme> | string | number) | SystemStyleObject<Theme> | CssVariableType;
}
/**
 * Map of all available CSS properties (including aliases) and their raw value.
 * Only used internally to map CSS properties to input types (responsive value,
 * theme function or nested) in `SystemCssProperties`.
 */
export interface AllSystemCSSProperties extends Omit<StandardCSSProperties, keyof OverwriteCSSProperties>, OverwriteCSSProperties, AliasesCSSProperties {
}
export declare type SystemCssProperties<Theme extends object = {}> = {
    [K in keyof AllSystemCSSProperties]: ResponsiveStyleValue<AllSystemCSSProperties[K]> | ((theme: Theme) => ResponsiveStyleValue<AllSystemCSSProperties[K]>) | SystemStyleObject<Theme>;
};
/**
 * The `SystemStyleObject` defines custom properties that will be transformed to
 * their corresponding values from the `Theme`. Other valid CSS properties are also allowed.
 */
export declare type SystemStyleObject<Theme extends object = {}> = SystemCssProperties<Theme> | CSSPseudoSelectorProps<Theme> | CSSSelectorObjectOrCssVariables<Theme> | null;
/**
 * The `SxProps` can be either object or function
 */
export declare type SxProps<Theme extends object = {}> = SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>) | Array<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>;
export interface StyleFunctionSx {
    (props: object): object;
    filterProps?: string[];
}
export declare function unstable_createStyleFunctionSx(styleFunctionMapping: Record<string, StyleFunctionSx>): StyleFunctionSx;
declare const styleFunctionSx: StyleFunctionSx;
export default styleFunctionSx;
