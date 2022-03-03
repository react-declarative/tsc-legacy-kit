// Type definitions for react-is 17.0
// Project: https://reactjs.org/
// Definitions by: Avi Vahl <https://github.com/AviVahl>
//                 Christian Chown <https://github.com/christianchown>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// NOTE: Users of the React 18 alpha should add a reference
// to 'react-is/next' in their project. See next.d.ts's top comment
// for reference and documentation on how exactly to do it.

export as namespace ReactIs;

import {
  LazyExoticComponent,
  MemoExoticComponent,
  ReactElement,
  ElementType
} from "react";

export declare function typeOf(value: any): symbol | undefined;
export declare function isValidElementType(value: any): value is ElementType;
export declare function isAsyncMode(value: any): value is ReactElement;
export declare function isContextConsumer(value: any): value is ReactElement;
export declare function isContextProvider(value: any): value is ReactElement;
export declare function isElement(value: any): value is ReactElement;
export declare function isForwardRef(value: any): value is ReactElement;
export declare function isFragment(value: any): value is ReactElement;
export declare function isLazy(value: any): value is LazyExoticComponent<any>;
export declare function isMemo(value: any): value is MemoExoticComponent<any>;
export declare function isProfiler(value: any): value is ReactElement;
export declare function isPortal(value: any): value is ReactElement;
export declare function isStrictMode(value: any): value is ReactElement;
export declare function isSuspense(value: any): value is ReactElement;

export declare const AsyncMode: symbol;
export declare const ContextConsumer: symbol;
export declare const ContextProvider: symbol;
export declare const Element: symbol;
export declare const ForwardRef: symbol;
export declare const Fragment: symbol;
export declare const Lazy: symbol;
export declare const Memo: symbol;
export declare const Portal: symbol;
export declare const Profiler: symbol;
export declare const StrictMode: symbol;
export declare const Suspense: symbol;
