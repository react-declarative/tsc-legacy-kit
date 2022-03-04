export type debounce = <T>(fn: (...args: Array<any>) => any) => () => Promise<T>;
export default debounce;
