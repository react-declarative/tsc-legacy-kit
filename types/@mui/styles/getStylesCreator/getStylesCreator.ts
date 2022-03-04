import { StyleRules, Styles } from '@mui/styles/withStyles';
export interface StylesCreator<Theme, Props extends object, ClassKey extends string = string> {
    create: (theme: Theme, name?: string) => StyleRules<Props, ClassKey>;
    options: {};
    themingEnabled: boolean;
}
export type getStylesCreator = <S extends Styles<any, any>>(style: S) => StylesCreator<any, any>;
export default getStylesCreator;
