import type { Placement } from "../enums";
export type getMainAxisFromPlacement = (placement: Placement) => "x" | "y";
export default getMainAxisFromPlacement;
