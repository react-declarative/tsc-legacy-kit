import * as React from 'react';
import { ExtendSliderUnstyledTypeMap, ExtendSliderUnstyled, SliderUnstyledTypeMap } from '@mui/base/SliderUnstyled';
import { SxProps } from '@mui/system';
import { OverridableStringUnion } from '@mui/types';
import { Theme } from '../styles';
import { OverrideProps } from '../OverridableComponent';
export interface SliderPropsColorOverrides {
}
export interface SliderPropsSizeOverrides {
}
export declare type SliderTypeMap<D extends React.ElementType = 'span', P = {}> = ExtendSliderUnstyledTypeMap<{
    props: P & {
        /**
         * The color of the component. It supports those theme colors that make sense for this component.
         * @default 'primary'
         */
        color?: OverridableStringUnion<'primary' | 'secondary', SliderPropsColorOverrides>;
        /**
         * Override or extend the styles applied to the component.
         */
        classes?: SliderUnstyledTypeMap['props']['classes'] & {
            /** Class name applied to the root element if `color="primary"`. */
            colorPrimary?: string;
            /** Class name applied to the root element if `color="secondary"`. */
            colorSecondary?: string;
            /** Class name applied to the root element if `size="small"`. */
            sizeSmall?: string;
            /** Class name applied to the thumb element if `color="primary"`. */
            thumbColorPrimary?: string;
            /** Class name applied to the thumb element if `color="secondary"`. */
            thumbColorSecondary?: string;
            /** Class name applied to the thumb element if `size="small"`. */
            thumbSizeSmall?: string;
        };
        /**
         * The size of the slider.
         * @default 'medium'
         */
        size?: OverridableStringUnion<'small' | 'medium', SliderPropsSizeOverrides>;
        /**
         * The system prop that allows defining system overrides as well as additional CSS styles.
         */
        sx?: SxProps<Theme>;
    };
    defaultComponent: D;
}>;
declare type SliderRootProps = NonNullable<SliderTypeMap['props']['componentsProps']>['root'];
declare type SliderMarkProps = NonNullable<SliderTypeMap['props']['componentsProps']>['mark'];
declare type SliderMarkLabelProps = NonNullable<SliderTypeMap['props']['componentsProps']>['markLabel'];
declare type SliderRailProps = NonNullable<SliderTypeMap['props']['componentsProps']>['rail'];
declare type SliderTrackProps = NonNullable<SliderTypeMap['props']['componentsProps']>['track'];
declare type SliderThumbProps = NonNullable<SliderTypeMap['props']['componentsProps']>['thumb'];
declare type SliderValueLabelProps = NonNullable<SliderTypeMap['props']['componentsProps']>['valueLabel'];
declare type SliderInputProps = any;
export declare const SliderRoot: React.FC<SliderRootProps>;
export declare const SliderMark: React.FC<SliderMarkProps>;
export declare const SliderMarkLabel: React.FC<SliderMarkLabelProps>;
export declare const SliderRail: React.FC<SliderRailProps>;
export declare const SliderTrack: React.FC<SliderTrackProps>;
export declare const SliderThumb: React.FC<SliderThumbProps>;
export declare const SliderValueLabel: React.FC<SliderValueLabelProps>;
export declare const SliderInput: React.FC<SliderInputProps>;
/**
 *
 * Demos:
 *
 * - [Slider](https://mui.com/components/slider/)
 *
 * API:
 *
 * - [Slider API](https://mui.com/api/slider/)
 * - inherits [SliderUnstyled API](https://mui.com/api/slider-unstyled/)
 */
declare const Slider: ExtendSliderUnstyled<SliderTypeMap>;
export declare type SliderClassKey = keyof NonNullable<SliderTypeMap['props']['classes']>;
export declare type SliderProps<D extends React.ElementType = SliderTypeMap['defaultComponent'], P = {}> = OverrideProps<SliderTypeMap<D, P>, D>;
export declare type SliderClasses = Record<SliderClassKey, string>;
export declare const sliderClasses: SliderClasses;
export default Slider;
