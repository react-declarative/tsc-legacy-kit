export type expandToHashMap = <T extends number | string | boolean, K extends string>(value: T, keys: Array<K>) => {
    [key: string]: T;
};
export default expandToHashMap;
