import type { Window } from "../types";
export type getNodeScroll = (node: Node | Window) => {
    scrollLeft: any;
    scrollTop: any;
};
export default getNodeScroll;
