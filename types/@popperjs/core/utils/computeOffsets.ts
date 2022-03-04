import type { Rect, PositioningStrategy, Offsets, ClientRectObject } from "../types";
import { Placement } from "../enums";
export type computeOffsets = ({ reference, element, placement }: {
    reference: Rect | ClientRectObject;
    element: Rect | ClientRectObject;
    strategy: PositioningStrategy;
    placement?: Placement;
}) => Offsets;
export default computeOffsets;