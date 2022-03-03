import 'react';
import { Interpolation } from '@emotion/serialize';
import { Theme } from './index';
declare type WithConditionalCSSProp<P> = 'className' extends keyof P ? string extends P['className' & keyof P] ? {
    css?: Interpolation<Theme>;
} : {} : {};
declare type ReactJSXElement = JSX.Element;
declare type ReactJSXElementClass = JSX.ElementClass;
declare type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty;
declare type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute;
declare type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;
declare type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes;
declare type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>;
declare type ReactJSXIntrinsicElements = JSX.IntrinsicElements;
export declare namespace EmotionJSX {
    interface Element extends ReactJSXElement {
    }
    interface ElementClass extends ReactJSXElementClass {
    }
    interface ElementAttributesProperty extends ReactJSXElementAttributesProperty {
    }
    interface ElementChildrenAttribute extends ReactJSXElementChildrenAttribute {
    }
    type LibraryManagedAttributes<C, P> = WithConditionalCSSProp<P> & ReactJSXLibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes {
    }
    interface IntrinsicClassAttributes<T> extends ReactJSXIntrinsicClassAttributes<T> {
    }
    type IntrinsicElements = {
        [K in keyof ReactJSXIntrinsicElements]: ReactJSXIntrinsicElements[K] & {
            css?: Interpolation<Theme>;
        };
    };
}
export {};
