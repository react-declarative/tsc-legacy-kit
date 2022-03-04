import { SxProps } from './styleFunctionSx';
export type extendSxProp = <Props extends {
    sx?: SxProps<any>;
} = {}>(props: Props) => Props;
export default extendSxProp;
