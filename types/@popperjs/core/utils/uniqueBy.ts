export type uniqueBy<T> = (arr: Array<T>, fn: (arg0: T) => any) => Array<T>;
export default uniqueBy;
