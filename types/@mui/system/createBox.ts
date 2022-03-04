import Box from './Box';
import styleFunctionSx from './styleFunctionSx';
export type createBox = (options?: {
    defaultTheme: object;
    defaultClassName?: string;
    generateClassName?: (componentName: string) => string;
    styleFunctionSx?: typeof styleFunctionSx;
}) => typeof Box;
export default createBox;
