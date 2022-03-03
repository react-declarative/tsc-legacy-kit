export interface Cancelable {
    clear(): void;
}
export type debounce = <T extends (...args: any[]) => any>(func: T, wait?: number) => T & Cancelable;
export default debounce;
