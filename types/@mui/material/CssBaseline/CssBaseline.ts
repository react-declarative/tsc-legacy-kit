import * as React from 'react';
import { StyledComponentProps } from '../styles';
export interface CssBaselineProps extends StyledComponentProps<never> {
    /**
     * You can wrap a node.
     */
    children?: React.ReactNode;
    /**
     * Enable `color-scheme` CSS property to use `theme.palette.mode`.
     * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
     * For browser support, check out https://caniuse.com/?search=color-scheme
     * @default false
     */
    enableColorScheme?: boolean;
}
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 *
 * Demos:
 *
 * - [Css Baseline](https://mui.com/components/css-baseline/)
 *
 * API:
 *
 * - [CssBaseline API](https://mui.com/api/css-baseline/)
 */
export type CssBaseline = (props: CssBaselineProps) => JSX.Element;
export default CssBaseline;
