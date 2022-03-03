import { SimpleStyleFunction, spacing, PropsFor } from './Box';
export declare type SpacingProps = PropsFor<typeof spacing>;
export declare function createUnarySpacing<Spacing>(theme: {
    spacing: Spacing;
}): Spacing extends number ? (abs: number | string) => number | number : Spacing extends any[] ? <Index extends number>(abs: Index | string) => Spacing[Index] | string : Spacing extends (...args: unknown[]) => unknown ? Spacing : () => undefined;
export declare const margin: SimpleStyleFunction<'m' | 'mt' | 'mr' | 'mb' | 'ml' | 'mx' | 'my' | 'margin' | 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft' | 'marginX' | 'marginY' | 'marginInline' | 'marginInlineStart' | 'marginInlineEnd' | 'marginBlock' | 'marginBlockStart' | 'marginBlockEnd'>;
export declare type MarginProps = PropsFor<typeof margin>;
export declare const padding: SimpleStyleFunction<'p' | 'pt' | 'pr' | 'pb' | 'pl' | 'px' | 'py' | 'padding' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft' | 'paddingX' | 'paddingY' | 'paddingInline' | 'paddingInlineStart' | 'paddingInlineEnd' | 'paddingBlock' | 'paddingBlockStart' | 'paddingBlockEnd'>;
export declare type PaddingProps = PropsFor<typeof padding>;
