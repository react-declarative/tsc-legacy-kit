/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
export declare type useEventCallback = <Args extends unknown[], Return>(fn: (...args: Args) => Return) => (...args: Args) => Return;
export default useEventCallback;
