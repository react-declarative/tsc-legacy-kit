import type { Modifier } from "../types";
export type mergeByName = (modifiers: Array<Partial<Modifier<any, any>>>) => Array<Partial<Modifier<any, any>>>;
export default mergeByName;
