type Fn<T> = (key: string) => T

export type memoize = <T>(fn: Fn<T>) => Fn<T>

export default memoize;
