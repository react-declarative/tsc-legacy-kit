import { Theme } from '@emotion/react';
import { CreateStyled as BaseCreateStyled, CreateStyledComponent } from './base';
export { ArrayInterpolation, ComponentSelector, CSSObject, FunctionInterpolation, Interpolation, StyledComponent, StyledOptions, CreateStyledComponent } from './base';
export declare type StyledTags = {
    [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<{
        theme?: Theme;
        as?: React.ElementType;
    }, JSX.IntrinsicElements[Tag]>;
};
export interface CreateStyled extends BaseCreateStyled, StyledTags {
}
declare const styled: CreateStyled;
export default styled;