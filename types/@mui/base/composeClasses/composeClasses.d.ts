export declare type composeClasses = <ClassKey extends string>(slots: Record<ClassKey, ReadonlyArray<string | false | undefined | null>>, getUtilityClass: (slot: string) => string, classes: Record<string, string> | undefined) => Record<ClassKey, string>;
export default composeClasses;
