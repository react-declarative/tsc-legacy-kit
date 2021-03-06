import { Color, PaletteMode } from '..';
export {};
export interface CommonColors {
    black: string;
    white: string;
}
export declare type ColorPartial = Partial<Color>;
export interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
}
export interface TypeAction {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
    disabled: string;
    disabledOpacity: number;
    disabledBackground: string;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
}
export interface TypeBackground {
    default: string;
    paper: string;
}
export declare type TypeDivider = string;
export declare type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial;
export interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}
export interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}
export interface TypeObject {
    text: TypeText;
    action: TypeAction;
    divider: TypeDivider;
    background: TypeBackground;
}
export declare type PaletteTonalOffset = number | {
    light: number;
    dark: number;
};
export declare const light: TypeObject;
export declare const dark: TypeObject;
export interface PaletteAugmentColorOptions {
    color: PaletteColorOptions;
    mainShade?: number | string;
    lightShade?: number | string;
    darkShade?: number | string;
    name?: number | string;
}
export interface Palette {
    common: CommonColors;
    mode: PaletteMode;
    contrastThreshold: number;
    tonalOffset: PaletteTonalOffset;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: Color;
    text: TypeText;
    divider: TypeDivider;
    action: TypeAction;
    background: TypeBackground;
    getContrastText: (background: string) => string;
    augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
}
export declare type PartialTypeObject = {
    [P in keyof TypeObject]?: Partial<TypeObject[P]>;
};
export interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    info?: PaletteColorOptions;
    success?: PaletteColorOptions;
    mode?: PaletteMode;
    tonalOffset?: PaletteTonalOffset;
    contrastThreshold?: number;
    common?: Partial<CommonColors>;
    grey?: ColorPartial;
    text?: Partial<TypeText>;
    divider?: string;
    action?: Partial<TypeAction>;
    background?: Partial<TypeBackground>;
    getContrastText?: (background: string) => string;
}
export type createPalette = (palette: PaletteOptions) => Palette;
export default createPalette;
