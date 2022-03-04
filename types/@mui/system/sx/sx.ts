import { CSSObject } from '@mui/styled-engine';
import { SxProps } from '../styleFunctionSx';
export type sx = <T extends object = {}>(styles: SxProps<T>) => CSSObject;
export default sx;