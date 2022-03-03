import * as CSS from 'csstype';
import { Breakpoints, Spacing } from '@mui/system';
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
export interface Mixins {
    toolbar: CSSProperties;
}
export interface MixinsOptions extends Partial<Mixins> {
}
export default function createMixins(breakpoints: Breakpoints, spacing: Spacing, mixins: MixinsOptions): Mixins;
