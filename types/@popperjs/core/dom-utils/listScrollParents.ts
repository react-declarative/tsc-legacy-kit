import type { Window, VisualViewport } from "../types";
export type listScrollParents = (element: Node, list?: Array<Element | Window>) => Array<Element | Window | VisualViewport>;
export default listScrollParents;