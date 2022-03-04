import { Theme } from './createTheme';
export type useTheme = <T = Theme>(defaultTheme?: T) => T;
export default useTheme;