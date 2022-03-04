import type { ClientRectObject, VirtualElement } from "../types";
export type getBoundingClientRect = (element: Element | VirtualElement, includeScale?: boolean) => ClientRectObject;
export default getBoundingClientRect;
