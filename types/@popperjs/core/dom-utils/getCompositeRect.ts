import type { Rect, VirtualElement, Window } from "../types";
export type getCompositeRect = (elementOrVirtualElement: Element | VirtualElement, offsetParent: Element | Window, isFixed?: boolean) => Rect;
export default getCompositeRect;
