export interface RegisteredCache {
    [key: string]: string;
}
export interface StyleSheet {
    container: HTMLElement;
    nonce?: string;
    key: string;
    insert(rule: string): void;
    flush(): void;
    tags: Array<HTMLStyleElement>;
}
export interface EmotionCache {
    inserted: {
        [key: string]: string | true;
    };
    registered: RegisteredCache;
    sheet: StyleSheet;
    key: string;
    compat?: true;
    nonce?: string;
    insert(selector: string, serialized: SerializedStyles, sheet: StyleSheet, shouldCache: boolean): string | void;
}
export interface SerializedStyles {
    name: string;
    styles: string;
    map?: string;
    next?: SerializedStyles;
}
export declare const isBrowser: boolean;
export declare function getRegisteredStyles(registered: RegisteredCache, registeredStyles: Array<string>, classNames: string): string;
export declare function registerStyles(cache: EmotionCache, serialized: SerializedStyles, isStringTag: boolean): void;
export declare function insertStyles(cache: EmotionCache, serialized: SerializedStyles, isStringTag: boolean): string | void;
