/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param {object} defaultProps
 * @param {object} props
 * @returns {object} resolved props
 */
export declare type resolveProps = <T extends {
    className?: string;
} & Record<string, unknown>>(defaultProps: T, props: T) => T;
export default resolveProps;
