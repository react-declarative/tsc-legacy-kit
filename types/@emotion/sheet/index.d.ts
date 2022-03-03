export interface Options {
    nonce?: string;
    key: string;
    container: HTMLElement;
    speedy?: boolean;
    /** @deprecate use `insertionPoint` instead */
    prepend?: boolean;
    insertionPoint?: HTMLElement;
}
export declare class StyleSheet {
    isSpeedy: boolean;
    ctr: number;
    tags: Array<HTMLStyleElement>;
    container: HTMLElement;
    key: string;
    nonce?: string;
    before?: Element | null;
    constructor(options?: Options);
    insert(rule: string): void;
    flush(): void;
    hydrate(nodes: Array<HTMLStyleElement>): void;
}
