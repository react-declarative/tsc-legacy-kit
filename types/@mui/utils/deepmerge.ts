export declare function isPlainObject(item: unknown): item is Record<keyof any, unknown>;
export interface DeepmergeOptions {
    clone?: boolean;
}
export type deepmerge = <T>(target: T, source: unknown, options?: DeepmergeOptions) => T;
export default deepmerge;
