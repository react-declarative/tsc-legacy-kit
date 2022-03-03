import { EmotionCache } from '@emotion/utils';
export { EmotionCache };
export interface StylisElement {
    type: string;
    value: string;
    props: Array<string> | string;
    root: StylisElement | null;
    parent: StylisElement | null;
    children: Array<StylisElement> | string;
    line: number;
    column: number;
    length: number;
    return: string;
}
export declare type StylisPluginCallback = (element: StylisElement, index: number, children: Array<StylisElement>, callback: StylisPluginCallback) => string | void;
export declare type StylisPlugin = (element: StylisElement, index: number, children: Array<StylisElement>, callback: StylisPluginCallback) => string | void;
export interface Options {
    nonce?: string;
    stylisPlugins?: Array<StylisPlugin>;
    key: string;
    container?: HTMLElement;
    speedy?: boolean;
    /** @deprecate use `insertionPoint` instead */
    prepend?: boolean;
    insertionPoint?: HTMLElement;
}
export declare type createCache = (options: Options) => EmotionCache;
export default createCache;
