import { Breakpoint } from '@mui/system';
import { Theme } from './createTheme';
import { Variant } from './createTypography';
export interface ResponsiveFontSizesOptions {
    breakpoints?: Breakpoint[];
    disableAlign?: boolean;
    factor?: number;
    variants?: Variant[];
}
export type responsiveFontSizes = (theme: Theme, options?: ResponsiveFontSizesOptions) => Theme;
export default responsiveFontSizes;
