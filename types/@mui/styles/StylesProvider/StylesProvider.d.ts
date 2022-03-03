import React from 'react';
import { GenerateId, Jss } from 'jss';
export interface StylesOptions {
    disableGeneration?: boolean;
    generateClassName?: GenerateId;
    injectFirst?: boolean;
    jss?: Jss;
    sheetsCache?: {};
    sheetsManager?: {};
    sheetsRegistry?: {};
}
export declare const StylesContext: React.Context<StylesOptions>;
export interface StylesProviderProps extends StylesOptions {
    children?: React.ReactNode;
}
declare const StylesProvider: React.JSXElementConstructor<StylesProviderProps>;
export default StylesProvider;
