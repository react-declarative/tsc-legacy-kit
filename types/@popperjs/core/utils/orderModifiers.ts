import type { Modifier } from "../types";
export type orderModifiers = (modifiers: Array<Modifier<any, any>>) => Array<Modifier<any, any>>;
export default orderModifiers;
