import type { Modifier, Padding, Rect } from "../types";
import type { Placement } from "../enums";
export type Options = {
    element: HTMLElement | string | null;
    padding: Padding | ((arg0: {
        popper: Rect;
        reference: Rect;
        placement: Placement;
    }) => Padding);
};
export type ArrowModifier = Modifier<"arrow", Options>;
declare const _default: ArrowModifier;
export default _default;
