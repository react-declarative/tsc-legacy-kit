import { BasePlacement, Placement, auto } from "../enums";
export type getBasePlacement = (placement: Placement | typeof auto) => BasePlacement;
export default getBasePlacement;
