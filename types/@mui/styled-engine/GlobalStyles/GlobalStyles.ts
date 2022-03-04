import * as React from 'react';
import { Interpolation } from '@emotion/react';
export interface GlobalStylesProps<Theme = {}> {
    defaultTheme?: object;
    styles: Interpolation<Theme>;
}
export type GlobalStyles = (props: GlobalStylesProps) => React.ReactElement;
export default GlobalStyles;
