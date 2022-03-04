import { StyleRules } from '@mui/styles/withStyles';
/**
 * This function doesn't really "do anything" at runtime, it's just the identity
 * function. Its only purpose is to defeat TypeScript's type widening when providing
 * style rules to `withStyles` which are a function of the `Theme`.
 * @param styles a set of style mappings
 * @returns the same styles that were passed in
 */
export type createStyles = <ClassKey extends string, Props extends {}>(styles: StyleRules<Props, ClassKey>) => StyleRules<Props, ClassKey>;
export default createStyles;
