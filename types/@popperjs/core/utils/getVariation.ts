import { Variation, Placement } from "../enums";
export type getVariation = (placement: Placement) => Variation | null | undefined;
export default getVariation;
