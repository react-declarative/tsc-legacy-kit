import * as React from 'react';
import { CreateMUIStyled as CreateMUIStyledStyledEngine, CSSInterpolation } from '@mui/styled-engine';
import styleFunctionSx, { SxProps } from './styleFunctionSx';
import { Theme as DefaultTheme } from './createTheme';
export declare function shouldForwardProp(propName: PropertyKey): boolean;
export interface MUIStyledCommonProps<Theme extends object = DefaultTheme> {
    theme?: Theme;
    as?: React.ElementType;
    sx?: SxProps<Theme>;
}
export interface MuiStyledOptions {
    name?: string;
    slot?: string;
    overridesResolver?: (props: any, styles: Record<string, CSSInterpolation>) => CSSInterpolation;
    skipVariantsResolver?: boolean;
    skipSx?: boolean;
}
export declare type CreateMUIStyled<T extends object = DefaultTheme> = CreateMUIStyledStyledEngine<MUIStyledCommonProps<T>, MuiStyledOptions, T>;
export default function createStyled<T extends object = DefaultTheme>(options?: {
    defaultTheme?: T;
    rootShouldForwardProp?: (prop: PropertyKey) => boolean;
    slotShouldForwardProp?: (prop: PropertyKey) => boolean;
    styleFunctionSx?: typeof styleFunctionSx;
}): CreateMUIStyled<T>;
