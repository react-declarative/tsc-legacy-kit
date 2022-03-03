import type { Modifier } from "../types";
export type Options = {
    scroll: boolean;
    resize: boolean;
};
export type EventListenersModifier = Modifier<"eventListeners", Options>;
declare const _default: EventListenersModifier;
export default _default;
