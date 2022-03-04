import React from 'react';
export interface StylesOptions {
    disableGeneration?: boolean;
    generateClassName?: any;
    injectFirst?: boolean;
    jss?: any;
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
