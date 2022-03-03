// Type definitions for scheduler 0.16
// Project: https://reactjs.org/
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type FrameCallbackType = () => FrameCallbackType | void;
export interface CallbackNode {
  callback: FrameCallbackType;
  priorityLevel: number;
  expirationTime: number;
  next: CallbackNode | null;
  prev: CallbackNode | null;
}

export declare const unstable_ImmediatePriority = 1;
export declare const unstable_UserBlockingPriority = 2;
export declare const unstable_NormalPriority = 3;
export declare const unstable_IdlePriority = 5;
export declare const unstable_LowPriority = 4;
export declare function unstable_runWithPriority<T>(priorityLevel: number, eventHandler: () => T): T;
export declare function unstable_scheduleCallback(priorityLevel: number, callback: FrameCallbackType, options?: { delay?: number | undefined, timeout?: number | undefined}): CallbackNode;
export declare function unstable_next<T>(eventHandler: () => T): T;
export declare function unstable_cancelCallback(callbackNode: CallbackNode): void;
export declare function unstable_wrapCallback(callback: FrameCallbackType): () => FrameCallbackType;
export declare function unstable_getCurrentPriorityLevel(): number;
export declare function unstable_shouldYield(): boolean;
export declare function unstable_continueExecution(): void;
export declare function unstable_pauseExecution(): void;
export declare function unstable_getFirstCallbackNode(): CallbackNode | null;
export declare function unstable_now(): number;
