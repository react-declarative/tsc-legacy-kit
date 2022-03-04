import type { ClientRectObject } from "../types";
import type { Boundary, RootBoundary } from "../enums";
export type getClippingRect = (element: Element, boundary: Boundary, rootBoundary: RootBoundary) => ClientRectObject;
export default getClippingRect;
