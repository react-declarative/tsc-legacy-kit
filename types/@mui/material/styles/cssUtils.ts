import { CSSProperties } from './createTypography';

export declare function isUnitless(value: string): boolean;

export declare function getUnit(input: string): string;

export declare function toUnitless(value: string): number;

export declare function convertLength(baseFontSize: string): (length: string, toUnit: string) => string;

export interface AlignPropertyParams {
  size: number;
  grid: number;
}
export declare function alignProperty(params: AlignPropertyParams): number;

export interface FontGridParams {
  lineHeight: number;
  pixels: number;
  htmlFontSize: number;
}
export declare function fontGrid(params: FontGridParams): number;

export interface ResponsivePropertyParams {
  cssProperty: string;
  min: number;
  max: number;
  unit?: string;
  breakpoints?: number[];
  transform?: (value: number) => number;
}
export declare function responsiveProperty(params: ResponsivePropertyParams): CSSProperties;
