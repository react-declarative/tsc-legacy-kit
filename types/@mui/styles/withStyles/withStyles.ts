import { PropInjector } from '@mui/types';
import * as CSS from 'csstype';
import * as JSS from 'jss';
import { DefaultTheme } from '../defaultTheme';
export {};
declare type JSSNormalCssProperties = CSS.Properties<number | string>;
declare type JSSFontface = CSS.AtRule.FontFace & {
    fallbacks?: CSS.AtRule.FontFace[];
};
export declare type PropsFunc<Props extends object, T> = (props: Props) => T;
/**
 * Allows the user to augment the properties available
 */
export interface BaseCSSProperties extends JSSNormalCssProperties {
    '@font-face'?: JSSFontface | JSSFontface[];
}
export interface CSSProperties extends BaseCSSProperties {
    [k: string]: unknown | CSSProperties;
}
export declare type BaseCreateCSSProperties<Props extends object = {}> = {
    [P in keyof BaseCSSProperties]: BaseCSSProperties[P] | PropsFunc<Props, BaseCSSProperties[P]>;
};
export interface CreateCSSProperties<Props extends object = {}> extends BaseCreateCSSProperties<Props> {
    [k: string]: BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>] | CreateCSSProperties<Props>;
}
/**
 * This is basically the API of JSS. It defines a Map<string, CSS>,
 * where
 * - the `keys` are the class (names) that will be created
 * - the `values` are objects that represent CSS rules (`React.CSSProperties`).
 *
 * if only `CSSProperties` are matched `Props` are inferred to `any`
 */
export declare type StyleRules<Props extends object = {}, ClassKey extends string = string> = Record<ClassKey, CSSProperties | CreateCSSProperties<Props> | PropsFunc<Props, CreateCSSProperties<Props>>>;
/**
 * @internal
 */
export declare type StyleRulesCallback<Theme, Props extends object, ClassKey extends string = string> = (theme: Theme) => StyleRules<Props, ClassKey>;
export declare type Styles<Theme, Props extends object, ClassKey extends string = string> = StyleRules<Props, ClassKey> | StyleRulesCallback<Theme, Props, ClassKey>;
export interface WithStylesOptions<Theme = DefaultTheme> extends JSS.StyleSheetFactoryOptions {
    defaultTheme?: Theme;
    flip?: boolean;
    withTheme?: boolean;
    name?: string;
}
export declare type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;
/**
 * @internal
 */
export declare type ClassKeyInferable<Theme, Props extends object> = string | Styles<Theme, Props>;
export declare type ClassKeyOfStyles<StylesOrClassKey> = StylesOrClassKey extends string ? StylesOrClassKey : StylesOrClassKey extends StyleRulesCallback<any, any, infer ClassKey> ? ClassKey : StylesOrClassKey extends StyleRules<any, infer ClassKey> ? ClassKey : never;
/**
 * infers the type of the props used in the styles
 */
export declare type PropsOfStyles<StylesType> = StylesType extends Styles<any, infer Props> ? Props : {};
/**
 * infers the type of the theme used in the styles
 */
export declare type ThemeOfStyles<StylesType> = StylesType extends Styles<infer Theme, any> ? Theme : {};
export declare type WithStyles<StylesType extends ClassKeyInferable<any, any>, IncludeTheme extends boolean | undefined = false> = (IncludeTheme extends true ? {
    theme: ThemeOfStyles<StylesType>;
} : {}) & {
    classes: ClassNameMap<ClassKeyOfStyles<StylesType>>;
} & PropsOfStyles<StylesType>;
export interface StyledComponentProps<ClassKey extends string = string> {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ClassNameMap<ClassKey>>;
}
export type withStyles = <StylesType extends Styles<any, any>, Options extends WithStylesOptions<ThemeOfStyles<StylesType>> = {}>(style: StylesType, options?: Options) => PropInjector<WithStyles<StylesType, Options['withTheme']>, StyledComponentProps<ClassKeyOfStyles<StylesType>> & PropsOfStyles<StylesType>>;
export default withStyles;