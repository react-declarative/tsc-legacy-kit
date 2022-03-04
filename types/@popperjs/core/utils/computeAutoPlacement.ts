import type { State, Padding } from "../types";
import type { Placement, ComputedPlacement, Boundary, RootBoundary } from "../enums";
declare type Options = {
    placement: Placement;
    padding: Padding;
    boundary: Boundary;
    rootBoundary: RootBoundary;
    flipVariations: boolean;
    allowedAutoPlacements?: Array<Placement>;
};
export type computeAutoPlacement = (state: Partial<State>, options?: Options) => Array<ComputedPlacement>;
export default computeAutoPlacement;
export {};
