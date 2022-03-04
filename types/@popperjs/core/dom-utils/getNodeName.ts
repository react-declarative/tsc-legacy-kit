import type { Window } from "../types";
export type getNodeName = (element: (Node | null | undefined) | Window) => string | null | undefined;
export default getNodeName;
