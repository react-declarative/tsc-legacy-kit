export interface ThemeWithProps {
    components?: any;
}
export declare type ThemedProps<Theme, Name extends keyof any> = Theme extends {
    components: Record<Name, {
        defaultProps: infer Props;
    }>;
} ? Props : {};
export declare type useThemeProps = <Theme extends ThemeWithProps, Props, Name extends keyof any>(params: {
    props: Props;
    name: Name;
    defaultTheme?: Theme;
}) => Props & ThemedProps<Theme, Name>;
export default useThemeProps;
