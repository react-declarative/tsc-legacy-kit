import * as React from 'react';
import * as CSS from 'csstype';
import { Palette } from './createPalette';
export declare type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
export interface FontStyle extends Required<{
    fontFamily: React.CSSProperties['fontFamily'];
    fontSize: number;
    fontWeightLight: React.CSSProperties['fontWeight'];
    fontWeightRegular: React.CSSProperties['fontWeight'];
    fontWeightMedium: React.CSSProperties['fontWeight'];
    fontWeightBold: React.CSSProperties['fontWeight'];
    htmlFontSize: number;
}> {
}
export declare type NormalCssProperties = CSS.Properties<number | string>;
export declare type Fontface = CSS.AtRule.FontFace & {
    fallbacks?: CSS.AtRule.FontFace[];
};
/**
 * Allows the user to augment the properties available
 */
export interface BaseCSSProperties extends NormalCssProperties {
    '@font-face'?: Fontface | Fontface[];
}
export interface CSSProperties extends BaseCSSProperties {
    [k: string]: unknown | CSSProperties;
}
export interface FontStyleOptions extends Partial<FontStyle> {
    allVariants?: React.CSSProperties;
}
export declare type TypographyStyle = CSSProperties;
export interface TypographyStyleOptions extends TypographyStyle {
}
export interface TypographyUtils {
    pxToRem: (px: number) => string;
}
export interface Typography extends Record<Variant, TypographyStyle>, FontStyle, TypographyUtils {
}
export interface TypographyOptions extends Partial<Record<Variant, TypographyStyleOptions> & FontStyleOptions> {
}
export type createTypography = (palette: Palette, typography: TypographyOptions | ((palette: Palette) => TypographyOptions)) => Typography;
export default createTypography;
