import * as React from 'react';
/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 */
export declare type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;
export declare type DistributiveOmit<T, U> = T extends any ? Pick<T, Exclude<keyof T, U>> : never;
