import * as React from 'react';
import { SxProps } from '@mui/system';
import { InternalStandardProps as StandardProps, Theme } from '..';
import { CardActionsClasses } from './cardActionsClasses';
export interface CardActionsProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>> {
    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CardActionsClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    /**
     * If `true`, the actions do not have additional margin.
     * @default false
     */
    disableSpacing?: boolean;
}
/**
 *
 * Demos:
 *
 * - [Cards](https://mui.com/components/cards/)
 *
 * API:
 *
 * - [CardActions API](https://mui.com/api/card-actions/)
 */
export type CardActions = (props: CardActionsProps) => JSX.Element;
export default CardActions;
