import { Theme } from './createTheme';
import { Components } from './components';
export interface ThemeWithProps {
    components?: Components<Omit<Theme, 'components'>>;
}
export declare type ThemedProps<Theme, Name extends keyof any> = Theme extends {
    components: Record<Name, {
        defaultProps: infer Props;
    }>;
} ? Props : {};
export type useThemeProps = <Theme extends ThemeWithProps, Props, Name extends keyof any>(params: {
    props: Props;
    name: Name;
}) => Props & ThemedProps<Theme, Name>;
export default useThemeProps;
