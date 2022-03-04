export interface UseScrollTriggerOptions {
    disableHysteresis?: boolean;
    target?: Node | Window;
    threshold?: number;
}
export type useScrollTrigger = (options?: UseScrollTriggerOptions) => boolean;
export default useScrollTrigger;
