import { ClassNameMap, Styles, WithStylesOptions } from '@mui/styles/withStyles';
import { DefaultTheme } from '../defaultTheme';
export type makeStyles = <Theme = DefaultTheme, Props extends object = {}, ClassKey extends string = string>(styles: Styles<Theme, Props, ClassKey>, options?: Omit<WithStylesOptions<Theme>, 'withTheme'>) => keyof Props extends never ? (props?: any) => ClassNameMap<ClassKey> : (props: Props) => ClassNameMap<ClassKey>;
export default makeStyles;