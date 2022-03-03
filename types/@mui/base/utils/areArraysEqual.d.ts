declare type ItemComparer<T> = (a: T, b: T) => boolean;
export declare type areArraysEqual<T> = (array1: T[], array2: T[], itemComparer?: ItemComparer<T>) => boolean;
export default areArraysEqual;
export {};
