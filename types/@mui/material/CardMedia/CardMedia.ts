import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '..';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { CardMediaClasses } from './cardMediaClasses';
export interface CardMediaTypeMap<P, D extends React.ElementType> {
    props: P & {
        /**
         * The content of the component.
         */
        children?: React.ReactNode;
        /**
         * Override or extend the styles applied to the component.
         */
        classes?: Partial<CardMediaClasses>;
        /**
         * Image to be displayed as a background image.
         * Either `image` or `src` prop must be specified.
         * Note that caller must specify height otherwise the image will not be visible.
         */
        image?: string;
        /**
         * An alias for `image` property.
         * Available only with media components.
         * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
         */
        src?: string;
        /**
         * The system prop that allows defining system overrides as well as additional CSS styles.
         */
        sx?: SxProps<Theme>;
    };
    defaultComponent: D;
}
/**
 *
 * Demos:
 *
 * - [Cards](https://mui.com/components/cards/)
 *
 * API:
 *
 * - [CardMedia API](https://mui.com/api/card-media/)
 */
declare const CardMedia: OverridableComponent<CardMediaTypeMap<{}, 'div'>>;
export declare type CardMediaProps<D extends React.ElementType = 'div', P = {}> = OverrideProps<CardMediaTypeMap<P, D>, D>;
export default CardMedia;
