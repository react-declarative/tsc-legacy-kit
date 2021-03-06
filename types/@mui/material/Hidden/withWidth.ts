import { Breakpoint } from '@mui/system';
import { PropInjector } from '@mui/types';
export interface WithWidthOptions {
    withTheme?: boolean;
    noSSR?: boolean;
    initialWidth?: Breakpoint;
    resizeInterval?: number;
}
export interface WithWidth {
    width: Breakpoint;
}
export interface WithWidthProps extends Partial<WithWidth> {
    innerRef?: React.Ref<any>;
}
export declare function isWidthDown(breakpoint: Breakpoint, screenWidth: Breakpoint, inclusive?: boolean): boolean;
export declare function isWidthUp(breakpoint: Breakpoint, screenWidth: Breakpoint, inclusive?: boolean): boolean;
export type withWidth = (options?: WithWidthOptions) => PropInjector<WithWidth, WithWidthProps>;
export default withWidth;