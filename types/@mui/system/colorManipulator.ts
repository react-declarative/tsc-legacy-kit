export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla';
export interface ColorObject {
  type: ColorFormat;
  values: [number, number, number] | [number, number, number, number];
  colorSpace?: 'srgb' | 'display-p3' | 'a98-rgb' | 'prophoto-rgb' | 'rec-2020';
}

export declare function hexToRgb(hex: string): string;
export declare function rgbToHex(color: string): string;
export declare function hslToRgb(color: string): string;
export declare function decomposeColor(color: string): ColorObject;
export declare function recomposeColor(color: ColorObject): string;
export declare function getContrastRatio(foreground: string, background: string): number;
export declare function getLuminance(color: string): number;
export declare function emphasize(color: string, coefficient?: number): string;
export declare function alpha(color: string, value: number): string;
export declare function darken(color: string, coefficient: number): string;
export declare function lighten(color: string, coefficient: number): string;
