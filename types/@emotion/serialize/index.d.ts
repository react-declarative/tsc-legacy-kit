import { RegisteredCache, SerializedStyles } from '@emotion/utils';
import * as CSS from 'csstype';
export { RegisteredCache, SerializedStyles };
export declare type CSSProperties = CSS.PropertiesFallback<number | string>;
export declare type CSSPropertiesWithMultiValues = {
    [K in keyof CSSProperties]: CSSProperties[K] | Array<Extract<CSSProperties[K], string>>;
};
export declare type CSSPseudos = {
    [K in CSS.Pseudos]?: CSSObject;
};
export interface ArrayCSSInterpolation extends Array<CSSInterpolation> {
}
export declare type InterpolationPrimitive = null | undefined | boolean | number | string | ComponentSelector | Keyframes | SerializedStyles | CSSObject;
export declare type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;
export interface CSSOthersObject {
    [propertiesName: string]: CSSInterpolation;
}
export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos, CSSOthersObject {
}
export interface ComponentSelector {
    __emotion_styles: any;
}
export declare type Keyframes = {
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
export declare type Interpolation<Props> = InterpolationPrimitive | ArrayInterpolation<Props> | FunctionInterpolation<Props>;
export declare function serializeStyles<Props>(args: Array<TemplateStringsArray | Interpolation<Props>>, registered: RegisteredCache, props?: Props): SerializedStyles;
