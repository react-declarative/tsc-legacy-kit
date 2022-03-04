import type { Window } from "../types";
export type getWindowScroll = (node: Node | Window) => {
    scrollLeft: any;
    scrollTop: any;
};
export default getWindowScroll;
