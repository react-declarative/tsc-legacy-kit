import type { Placement, Boundary, RootBoundary } from "../enums";
import type { Modifier, Padding } from "../types";
export type Options = {
    mainAxis: boolean;
    altAxis: boolean;
    fallbackPlacements: Array<Placement>;
    padding: Padding;
    boundary: Boundary;
    rootBoundary: RootBoundary;
    altBoundary: boolean;
    flipVariations: boolean;
    allowedAutoPlacements: Array<Placement>;
};
export type FlipModifier = Modifier<"flip", Options>;
declare const _default: FlipModifier;
export default _default;
