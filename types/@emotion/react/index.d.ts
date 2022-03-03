import { EmotionCache } from '@emotion/cache';
import { ArrayInterpolation, ComponentSelector, CSSInterpolation, CSSObject, FunctionInterpolation, Interpolation, Keyframes, SerializedStyles } from '@emotion/serialize';
import { ClassAttributes, Context, Provider, FC, ReactElement, ReactNode, Ref, createElement } from 'react';
import { EmotionJSX } from './jsx-namespace';
export { ArrayInterpolation, ComponentSelector, CSSObject, EmotionCache, FunctionInterpolation, Interpolation, Keyframes, SerializedStyles };
export * from './theming';
export * from './helper';
export interface Theme {
}
export declare const ThemeContext: Context<object>;
export declare const CacheProvider: Provider<EmotionCache>;
export declare function withEmotionCache<Props, RefType = any>(func: (props: Props, context: EmotionCache, ref: Ref<RefType>) => ReactNode): FC<Props & ClassAttributes<RefType>>;
export declare function css(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): SerializedStyles;
export declare function css(...args: Array<CSSInterpolation>): SerializedStyles;
export interface GlobalProps {
    styles: Interpolation<Theme>;
}
/**
 * @desc
 * JSX generic are supported only after TS@2.9
 */
export declare function Global(props: GlobalProps): ReactElement;
export declare function keyframes(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): Keyframes;
export declare function keyframes(...args: Array<CSSInterpolation>): Keyframes;
export interface ArrayClassNamesArg extends Array<ClassNamesArg> {
}
export declare type ClassNamesArg = undefined | null | string | boolean | {
    [className: string]: boolean | null | undefined;
} | ArrayClassNamesArg;
export interface ClassNamesContent {
    css(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): string;
    css(...args: Array<CSSInterpolation>): string;
    cx(...args: Array<ClassNamesArg>): string;
    theme: Theme;
}
export interface ClassNamesProps {
    children(content: ClassNamesContent): ReactNode;
}
/**
 * @desc
 * JSX generic are supported only after TS@2.9
 */
export declare function ClassNames(props: ClassNamesProps): ReactElement;
export declare const jsx: typeof createElement;
export declare namespace jsx {
    namespace JSX {
        interface Element extends EmotionJSX.Element {
        }
        interface ElementClass extends EmotionJSX.ElementClass {
        }
        interface ElementAttributesProperty extends EmotionJSX.ElementAttributesProperty {
        }
        interface ElementChildrenAttribute extends EmotionJSX.ElementChildrenAttribute {
        }
        type LibraryManagedAttributes<C, P> = EmotionJSX.LibraryManagedAttributes<C, P>;
        interface IntrinsicAttributes extends EmotionJSX.IntrinsicAttributes {
        }
        interface IntrinsicClassAttributes<T> extends EmotionJSX.IntrinsicClassAttributes<T> {
        }
        type IntrinsicElements = EmotionJSX.IntrinsicElements;
    }
}
