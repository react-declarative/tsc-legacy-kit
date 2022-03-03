declare type Fn<T> = (key: string) => T;
export declare type memoize = <T>(fn: Fn<T>) => Fn<T>;
export default memoize;
