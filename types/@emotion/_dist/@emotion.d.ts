declare module "@emotion/utils/index" {
    export interface RegisteredCache {
        [key: string]: string;
    }
    export interface StyleSheet {
        container: HTMLElement;
        nonce?: string;
        key: string;
        insert(rule: string): void;
        flush(): void;
        tags: Array<HTMLStyleElement>;
    }
    export interface EmotionCache {
        inserted: {
            [key: string]: string | true;
        };
        registered: RegisteredCache;
        sheet: StyleSheet;
        key: string;
        compat?: true;
        nonce?: string;
        insert(selector: string, serialized: SerializedStyles, sheet: StyleSheet, shouldCache: boolean): string | void;
    }
    export interface SerializedStyles {
        name: string;
        styles: string;
        map?: string;
        next?: SerializedStyles;
    }
    export const isBrowser: boolean;
    export function getRegisteredStyles(registered: RegisteredCache, registeredStyles: Array<string>, classNames: string): string;
    export function registerStyles(cache: EmotionCache, serialized: SerializedStyles, isStringTag: boolean): void;
    export function insertStyles(cache: EmotionCache, serialized: SerializedStyles, isStringTag: boolean): string | void;
}
declare module "@emotion/cache/index" {
    import { EmotionCache } from "@emotion/utils/index";
    export { EmotionCache };
    export interface StylisElement {
        type: string;
        value: string;
        props: Array<string> | string;
        root: StylisElement | null;
        parent: StylisElement | null;
        children: Array<StylisElement> | string;
        line: number;
        column: number;
        length: number;
        return: string;
    }
    export type StylisPluginCallback = (element: StylisElement, index: number, children: Array<StylisElement>, callback: StylisPluginCallback) => string | void;
    export type StylisPlugin = (element: StylisElement, index: number, children: Array<StylisElement>, callback: StylisPluginCallback) => string | void;
    export interface Options {
        nonce?: string;
        stylisPlugins?: Array<StylisPlugin>;
        key: string;
        container?: HTMLElement;
        speedy?: boolean;
        /** @deprecate use `insertionPoint` instead */
        prepend?: boolean;
        insertionPoint?: HTMLElement;
    }
    export type createCache = (options: Options) => EmotionCache;
    export default createCache;
}
declare module "@emotion/serialize/index" {
    import { RegisteredCache, SerializedStyles } from "@emotion/utils/index";
    import * as CSS from 'csstype';
    export { RegisteredCache, SerializedStyles };
    export type CSSProperties = CSS.PropertiesFallback<number | string>;
    export type CSSPropertiesWithMultiValues = {
        [K in keyof CSSProperties]: CSSProperties[K] | Array<Extract<CSSProperties[K], string>>;
    };
    export type CSSPseudos = {
        [K in CSS.Pseudos]?: CSSObject;
    };
    export interface ArrayCSSInterpolation extends Array<CSSInterpolation> {
    }
    export type InterpolationPrimitive = null | undefined | boolean | number | string | ComponentSelector | Keyframes | SerializedStyles | CSSObject;
    export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;
    export interface CSSOthersObject {
        [propertiesName: string]: CSSInterpolation;
    }
    export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos, CSSOthersObject {
    }
    export interface ComponentSelector {
        __emotion_styles: any;
    }
    export type Keyframes = {
        name: string;
        styles: string;
        anim: number;
        toString: () => string;
    } & string;
    export interface ArrayInterpolation<Props> extends Array<Interpolation<Props>> {
    }
    export interface FunctionInterpolation<Props> {
        (props: Props): Interpolation<Props>;
    }
    export type Interpolation<Props> = InterpolationPrimitive | ArrayInterpolation<Props> | FunctionInterpolation<Props>;
    export function serializeStyles<Props>(args: Array<TemplateStringsArray | Interpolation<Props>>, registered: RegisteredCache, props?: Props): SerializedStyles;
}
declare module "@emotion/sheet/index" {
    export interface Options {
        nonce?: string;
        key: string;
        container: HTMLElement;
        speedy?: boolean;
        /** @deprecate use `insertionPoint` instead */
        prepend?: boolean;
        insertionPoint?: HTMLElement;
    }
    export class StyleSheet {
        isSpeedy: boolean;
        ctr: number;
        tags: Array<HTMLStyleElement>;
        container: HTMLElement;
        key: string;
        nonce?: string;
        before?: Element | null;
        constructor(options?: Options);
        insert(rule: string): void;
        flush(): void;
        hydrate(nodes: Array<HTMLStyleElement>): void;
    }
}
declare module "@emotion/css/create-instance" {
    import { EmotionCache, Options } from "@emotion/cache/index";
    import { CSSInterpolation } from "@emotion/serialize/index";
    import { StyleSheet } from "@emotion/sheet/index";
    export { CSSInterpolation, ArrayCSSInterpolation, ComponentSelector, CSSObject } from "@emotion/serialize/index";
    export { EmotionCache, Options };
    export interface ArrayClassNamesArg extends Array<ClassNamesArg> {
    }
    export type ClassNamesArg = undefined | null | string | boolean | {
        [className: string]: boolean | null | undefined;
    } | ArrayClassNamesArg;
    export interface CSSStyleSheet extends StyleSheet {
        speedy(value: boolean): void;
    }
    export interface Emotion {
        css(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): string;
        css(...args: Array<CSSInterpolation>): string;
        cx(...classNames: Array<ClassNamesArg>): string;
        flush(): void;
        hydrate(ids: Array<string>): void;
        injectGlobal(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): void;
        injectGlobal(...args: Array<CSSInterpolation>): void;
        keyframes(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): string;
        keyframes(...args: Array<CSSInterpolation>): string;
        sheet: CSSStyleSheet;
        cache: EmotionCache;
        merge(className: string): string;
        getRegisteredStyles(registeredStyles: Array<string>, className: string): string;
    }
    export type createEmotion = (options?: Options) => Emotion;
    export default createEmotion;
}
declare module "@emotion/css/index" {
    import { Emotion } from "@emotion/css/create-instance";
    export { ArrayClassNamesArg, ArrayCSSInterpolation, ClassNamesArg, ComponentSelector, EmotionCache, CSSInterpolation, CSSObject, CSSStyleSheet } from "@emotion/css/create-instance";
    export const flush: Emotion['flush'];
    export const hydrate: Emotion['hydrate'];
    export const cx: Emotion['cx'];
    export const merge: Emotion['merge'];
    export const getRegisteredStyles: Emotion['getRegisteredStyles'];
    export const css: Emotion['css'];
    export const injectGlobal: Emotion['injectGlobal'];
    export const keyframes: Emotion['keyframes'];
    export const sheet: Emotion['sheet'];
    export const cache: Emotion['cache'];
}
declare module "@emotion/hash/index" {
    export type murmurhash2_32_gc = (str: string) => string;
    export default murmurhash2_32_gc;
}
declare module "@emotion/is-prop-valid/index" {
    function isPropValid(string: PropertyKey): boolean;
    export default isPropValid;
}
declare module "@emotion/memoize/index" {
    type Fn<T> = (key: string) => T;
    export type memoize = <T>(fn: Fn<T>) => Fn<T>;
    export default memoize;
}
declare module "@emotion/react/jsx-namespace" {
    import 'react';
    import { Interpolation } from "@emotion/serialize/index";
    import { Theme } from "@emotion/react/index";
    type WithConditionalCSSProp<P> = 'className' extends keyof P ? string extends P['className' & keyof P] ? {
        css?: Interpolation<Theme>;
    } : {} : {};
    type ReactJSXElement = JSX.Element;
    type ReactJSXElementClass = JSX.ElementClass;
    type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty;
    type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute;
    type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;
    type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes;
    type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>;
    type ReactJSXIntrinsicElements = JSX.IntrinsicElements;
    export namespace EmotionJSX {
        interface Element extends ReactJSXElement {
        }
        interface ElementClass extends ReactJSXElementClass {
        }
        interface ElementAttributesProperty extends ReactJSXElementAttributesProperty {
        }
        interface ElementChildrenAttribute extends ReactJSXElementChildrenAttribute {
        }
        type LibraryManagedAttributes<C, P> = WithConditionalCSSProp<P> & ReactJSXLibraryManagedAttributes<C, P>;
        interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes {
        }
        interface IntrinsicClassAttributes<T> extends ReactJSXIntrinsicClassAttributes<T> {
        }
        type IntrinsicElements = {
            [K in keyof ReactJSXIntrinsicElements]: ReactJSXIntrinsicElements[K] & {
                css?: Interpolation<Theme>;
            };
        };
    }
}
declare module "@emotion/react/helper" {
    import * as React from 'react';
    /**
     * @desc Utility type for getting props type of React component.
     * It takes `defaultProps` into an account - making props with defaults optional.
     */
    export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;
    export type DistributiveOmit<T, U> = T extends any ? Pick<T, Exclude<keyof T, U>> : never;
}
declare module "@emotion/react/theming" {
    import * as React from 'react';
    import { Theme } from "@emotion/react/index";
    import { DistributiveOmit, PropsOf } from "@emotion/react/helper";
    export interface ThemeProviderProps {
        theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
        children?: React.ReactNode;
    }
    export interface ThemeProvider {
        (props: ThemeProviderProps): React.ReactElement;
    }
    export type withTheme = <C extends React.ComponentType<React.ComponentProps<C>>>(component: C) => React.FC<DistributiveOmit<PropsOf<C>, 'theme'> & {
        theme?: Theme;
    }>;
    export function useTheme(): Theme;
    export const ThemeProvider: ThemeProvider;
    export const withTheme: withTheme;
    export type WithTheme<P, T> = P extends {
        theme: infer Theme;
    } ? P & {
        theme: Exclude<Theme, undefined>;
    } : P & {
        theme: T;
    };
}
declare module "@emotion/react/index" {
    import { EmotionCache } from "@emotion/cache/index";
    import { ArrayInterpolation, ComponentSelector, CSSInterpolation, CSSObject, FunctionInterpolation, Interpolation, Keyframes, SerializedStyles } from "@emotion/serialize/index";
    import { ClassAttributes, Context, Provider, FC, ReactElement, ReactNode, Ref, createElement } from 'react';
    import { EmotionJSX } from "@emotion/react/jsx-namespace";
    export { ArrayInterpolation, ComponentSelector, CSSObject, EmotionCache, FunctionInterpolation, Interpolation, Keyframes, SerializedStyles };
    export * from "@emotion/react/theming";
    export * from "@emotion/react/helper";
    export interface Theme {
    }
    export const ThemeContext: Context<object>;
    export const CacheProvider: Provider<EmotionCache>;
    export function withEmotionCache<Props, RefType = any>(func: (props: Props, context: EmotionCache, ref: Ref<RefType>) => ReactNode): FC<Props & ClassAttributes<RefType>>;
    export function css(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): SerializedStyles;
    export function css(...args: Array<CSSInterpolation>): SerializedStyles;
    export interface GlobalProps {
        styles: Interpolation<Theme>;
    }
    /**
     * @desc
     * JSX generic are supported only after TS@2.9
     */
    export function Global(props: GlobalProps): ReactElement;
    export function keyframes(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): Keyframes;
    export function keyframes(...args: Array<CSSInterpolation>): Keyframes;
    export interface ArrayClassNamesArg extends Array<ClassNamesArg> {
    }
    export type ClassNamesArg = undefined | null | string | boolean | {
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
    export function ClassNames(props: ClassNamesProps): ReactElement;
    export const jsx: typeof createElement;
    export namespace jsx {
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
}
declare module "@emotion/react/css-prop" {
    import { Interpolation } from "@emotion/serialize/index";
    import { Theme } from "@emotion/react/index";
    module 'react' {
        interface Attributes {
            css?: Interpolation<Theme>;
        }
    }
}
declare module "@emotion/react/jsx-dev-runtime" {
    export { EmotionJSX as JSX } from "@emotion/react/jsx-namespace";
}
declare module "@emotion/react/jsx-runtime" {
    export { EmotionJSX as JSX } from "@emotion/react/jsx-namespace";
}
declare module "@emotion/styled/base" {
    import * as React from 'react';
    import { ComponentSelector, Interpolation } from "@emotion/serialize/index";
    import { PropsOf, Theme } from "@emotion/react/index";
    export { ArrayInterpolation, CSSObject, FunctionInterpolation } from "@emotion/serialize/index";
    export { ComponentSelector, Interpolation };
    /** Same as StyledOptions but shouldForwardProp must be a type guard */
    export interface FilteringStyledOptions<Props, ForwardedProps extends keyof Props = keyof Props> {
        label?: string;
        shouldForwardProp?(propName: PropertyKey): propName is ForwardedProps;
        target?: string;
    }
    export interface StyledOptions<Props> {
        label?: string;
        shouldForwardProp?(propName: PropertyKey): boolean;
        target?: string;
    }
    /**
     * @typeparam ComponentProps  Props which will be included when withComponent is called
     * @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
     */
    export interface StyledComponent<ComponentProps extends {}, SpecificComponentProps extends {} = {}, JSXProps extends {} = {}> extends React.FC<ComponentProps & SpecificComponentProps & JSXProps>, ComponentSelector {
        withComponent<C extends React.ComponentClass<React.ComponentProps<C>>>(component: C): StyledComponent<ComponentProps & PropsOf<C>, {}, {
            ref?: React.Ref<InstanceType<C>>;
        }>;
        withComponent<C extends React.ComponentType<React.ComponentProps<C>>>(component: C): StyledComponent<ComponentProps & PropsOf<C>>;
        withComponent<Tag extends keyof JSX.IntrinsicElements>(tag: Tag): StyledComponent<ComponentProps, JSX.IntrinsicElements[Tag]>;
    }
    /**
     * @typeparam ComponentProps  Props which will be included when withComponent is called
     * @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
     */
    export interface CreateStyledComponent<ComponentProps extends {}, SpecificComponentProps extends {} = {}, JSXProps extends {} = {}> {
        /**
         * @typeparam AdditionalProps  Additional props to add to your styled component
         */
        <AdditionalProps extends {} = {}>(...styles: Array<Interpolation<ComponentProps & SpecificComponentProps & AdditionalProps & {
            theme: Theme;
        }>>): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>;
        (template: TemplateStringsArray, ...styles: Array<Interpolation<ComponentProps & SpecificComponentProps & {
            theme: Theme;
        }>>): StyledComponent<ComponentProps, SpecificComponentProps, JSXProps>;
        /**
         * @typeparam AdditionalProps  Additional props to add to your styled component
         */
        <AdditionalProps extends {}>(template: TemplateStringsArray, ...styles: Array<Interpolation<ComponentProps & SpecificComponentProps & AdditionalProps & {
            theme: Theme;
        }>>): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>;
    }
    /**
     * @desc
     * This function accepts a React component or tag ('div', 'a' etc).
     *
     * @example styled(MyComponent)({ width: 100 })
     * @example styled(MyComponent)(myComponentProps => ({ width: myComponentProps.width })
     * @example styled('div')({ width: 100 })
     * @example styled('div')<Props>(props => ({ width: props.width })
     */
    export interface CreateStyled {
        <C extends React.ComponentClass<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>>(component: C, options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>): CreateStyledComponent<Pick<PropsOf<C>, ForwardedProps> & {
            theme?: Theme;
        }, {}, {
            ref?: React.Ref<InstanceType<C>>;
        }>;
        <C extends React.ComponentClass<React.ComponentProps<C>>>(component: C, options?: StyledOptions<React.ComponentProps<C>>): CreateStyledComponent<PropsOf<C> & {
            theme?: Theme;
        }, {}, {
            ref?: React.Ref<InstanceType<C>>;
        }>;
        <C extends React.ComponentType<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>>(component: C, options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>): CreateStyledComponent<Pick<PropsOf<C>, ForwardedProps> & {
            theme?: Theme;
        }>;
        <C extends React.ComponentType<React.ComponentProps<C>>>(component: C, options?: StyledOptions<React.ComponentProps<C>>): CreateStyledComponent<PropsOf<C> & {
            theme?: Theme;
        }>;
        <Tag extends keyof JSX.IntrinsicElements, ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag]>(tag: Tag, options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>): CreateStyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        }, Pick<JSX.IntrinsicElements[Tag], ForwardedProps>>;
        <Tag extends keyof JSX.IntrinsicElements>(tag: Tag, options?: StyledOptions<JSX.IntrinsicElements[Tag]>): CreateStyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        }, JSX.IntrinsicElements[Tag]>;
    }
    const styled: CreateStyled;
    export default styled;
}
declare module "@emotion/styled/index" {
    import { Theme } from "@emotion/react/index";
    import { CreateStyled as BaseCreateStyled, CreateStyledComponent } from "@emotion/styled/base";
    export { ArrayInterpolation, ComponentSelector, CSSObject, FunctionInterpolation, Interpolation, StyledComponent, StyledOptions, CreateStyledComponent } from "@emotion/styled/base";
    export type StyledTags = {
        [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        }, JSX.IntrinsicElements[Tag]>;
    };
    export interface CreateStyled extends BaseCreateStyled, StyledTags {
    }
    const styled: CreateStyled;
    export default styled;
}
declare module "@emotion/weak-memoize/index" {
    type UnaryFn<Arg, Return> = (arg: Arg) => Return;
    export type weakMemoize = <Arg extends object, Return>(func: UnaryFn<Arg, Return>) => UnaryFn<Arg, Return>;
    export default weakMemoize;
}
