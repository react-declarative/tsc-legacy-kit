import { Interpolation } from '@mui/system';
import { Theme } from './createTheme';
import { ComponentsPropsList } from './props';
export declare type ComponentsVariants = {
    [Name in keyof ComponentsPropsList]?: Array<{
        props: Partial<ComponentsPropsList[Name]>;
        style: Interpolation<{
            theme: Theme;
        }>;
    }>;
};
