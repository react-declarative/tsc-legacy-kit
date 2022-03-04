declare module "@popperjs/core/enums" {
    export const top: "top";
    export const bottom: "bottom";
    export const right: "right";
    export const left: "left";
    export const auto: "auto";
    export type BasePlacement = typeof top | typeof bottom | typeof right | typeof left;
    export const basePlacements: Array<BasePlacement>;
    export const start: "start";
    export const end: "end";
    export type Variation = typeof start | typeof end;
    export const clippingParents: "clippingParents";
    export const viewport: "viewport";
    export type Boundary = Element | Array<Element> | typeof clippingParents;
    export type RootBoundary = typeof viewport | "document";
    export const popper: "popper";
    export const reference: "reference";
    export type Context = typeof popper | typeof reference;
    export type VariationPlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
    export type AutoPlacement = "auto" | "auto-start" | "auto-end";
    export type ComputedPlacement = VariationPlacement | BasePlacement;
    export type Placement = AutoPlacement | BasePlacement | VariationPlacement;
    export const variationPlacements: Array<VariationPlacement>;
    export const placements: Array<Placement>;
    export const beforeRead: "beforeRead";
    export const read: "read";
    export const afterRead: "afterRead";
    export const beforeMain: "beforeMain";
    export const main: "main";
    export const afterMain: "afterMain";
    export const beforeWrite: "beforeWrite";
    export const write: "write";
    export const afterWrite: "afterWrite";
    export const modifierPhases: Array<ModifierPhases>;
    export type ModifierPhases = typeof beforeRead | typeof read | typeof afterRead | typeof beforeMain | typeof main | typeof afterMain | typeof beforeWrite | typeof write | typeof afterWrite;
}
declare module "@popperjs/core/modifiers/popperOffsets" {
    import type { Modifier } from "@popperjs/core/types";
    export type PopperOffsetsModifier = Modifier<"popperOffsets", {}>;
    const _default: PopperOffsetsModifier;
    export default _default;
}
declare module "@popperjs/core/modifiers/flip" {
    import type { Placement, Boundary, RootBoundary } from "@popperjs/core/enums";
    import type { Modifier, Padding } from "@popperjs/core/types";
    export type Options = {
        mainAxis: boolean;
        altAxis: boolean;
        fallbackPlacements: Array<Placement>;
        padding: Padding;
        boundary: Boundary;
        rootBoundary: RootBoundary;
        altBoundary: boolean;
        flipVariations: boolean;
        allowedAutoPlacements: Array<Placement>;
    };
    export type FlipModifier = Modifier<"flip", Options>;
    const _default: FlipModifier;
    export default _default;
}
declare module "@popperjs/core/modifiers/hide" {
    import type { Modifier } from "@popperjs/core/types";
    export type HideModifier = Modifier<"hide", {}>;
    const _default: HideModifier;
    export default _default;
}
declare module "@popperjs/core/modifiers/offset" {
    import type { Placement } from "@popperjs/core/enums";
    import type { Modifier, Rect, Offsets } from "@popperjs/core/types";
    export type OffsetsFunction = (arg0: {
        popper: Rect;
        reference: Rect;
        placement: Placement;
    }) => [number | null | undefined, number | null | undefined];
    type Offset = OffsetsFunction | [number | null | undefined, number | null | undefined];
    export type Options = {
        offset: Offset;
    };
    export function distanceAndSkiddingToXY(placement: Placement, rects: {
        popper: Rect;
        reference: Rect;
    }, offset: Offset): Offsets;
    export type OffsetModifier = Modifier<"offset", Options>;
    const _default: OffsetModifier;
    export default _default;
}
declare module "@popperjs/core/modifiers/eventListeners" {
    import type { Modifier } from "@popperjs/core/types";
    export type Options = {
        scroll: boolean;
        resize: boolean;
    };
    export type EventListenersModifier = Modifier<"eventListeners", Options>;
    const _default: EventListenersModifier;
    export default _default;
}
declare module "@popperjs/core/modifiers/computeStyles" {
    import type { PositioningStrategy, Offsets, Modifier, Rect } from "@popperjs/core/types";
    import { BasePlacement, Variation } from "@popperjs/core/enums";
    export type RoundOffsets = (offsets: Partial<{
        x: number;
        y: number;
        centerOffset: number;
    }>) => Offsets;
    export type Options = {
        gpuAcceleration: boolean;
        adaptive: boolean;
        roundOffsets?: boolean | RoundOffsets;
    };
    export function mapToStyles({ popper, popperRect, placement, variation, offsets, position, gpuAcceleration, adaptive, roundOffsets, isFixed }: {
        popper: HTMLElement;
        popperRect: Rect;
        placement: BasePlacement;
        variation: Variation | null | undefined;
        offsets: Partial<{
            x: number;
            y: number;
            centerOffset: number;
        }>;
        position: PositioningStrategy;
        gpuAcceleration: boolean;
        adaptive: boolean;
        roundOffsets: boolean | RoundOffsets;
        isFixed: boolean;
    }): {
        transform: string;
        top: string;
        right: string;
        bottom: string;
        left: string;
        position: PositioningStrategy;
    };
    export type ComputeStylesModifier = Modifier<"computeStyles", Options>;
    const _default: ComputeStylesModifier;
    export default _default;
}
declare module "@popperjs/core/modifiers/arrow" {
    import type { Modifier, Padding, Rect } from "@popperjs/core/types";
    import type { Placement } from "@popperjs/core/enums";
    export type Options = {
        element: HTMLElement | string | null;
        padding: Padding | ((arg0: {
            popper: Rect;
            reference: Rect;
            placement: Placement;
        }) => Padding);
    };
    export type ArrowModifier = Modifier<"arrow", Options>;
    const _default: ArrowModifier;
    export default _default;
}
declare module "@popperjs/core/modifiers/preventOverflow" {
    import type { Placement, Boundary, RootBoundary } from "@popperjs/core/enums";
    import type { Rect, Modifier, Padding } from "@popperjs/core/types";
    type TetherOffset = ((arg0: {
        popper: Rect;
        reference: Rect;
        placement: Placement;
    }) => number | {
        mainAxis: number;
        altAxis: number;
    }) | number | {
        mainAxis: number;
        altAxis: number;
    };
    export type Options = {
        mainAxis: boolean;
        altAxis: boolean;
        boundary: Boundary;
        rootBoundary: RootBoundary;
        altBoundary: boolean;
        /**
         * Allows the popper to overflow from its boundaries to keep it near its
         * reference element
         */
        tether: boolean;
        tetherOffset: TetherOffset;
        padding: Padding;
    };
    export type PreventOverflowModifier = Modifier<"preventOverflow", Options>;
    const _default: PreventOverflowModifier;
    export default _default;
}
declare module "@popperjs/core/modifiers/applyStyles" {
    import type { Modifier } from "@popperjs/core/types";
    export type ApplyStylesModifier = Modifier<"applyStyles", {}>;
    const _default: ApplyStylesModifier;
    export default _default;
}
declare module "@popperjs/core/types" {
    import type { Placement, ModifierPhases } from "@popperjs/core/enums";
    import type { PopperOffsetsModifier } from "@popperjs/core/modifiers/popperOffsets";
    import type { FlipModifier } from "@popperjs/core/modifiers/flip";
    import type { HideModifier } from "@popperjs/core/modifiers/hide";
    import type { OffsetModifier } from "@popperjs/core/modifiers/offset";
    import type { EventListenersModifier } from "@popperjs/core/modifiers/eventListeners";
    import type { ComputeStylesModifier } from "@popperjs/core/modifiers/computeStyles";
    import type { ArrowModifier } from "@popperjs/core/modifiers/arrow";
    import type { PreventOverflowModifier } from "@popperjs/core/modifiers/preventOverflow";
    import type { ApplyStylesModifier } from "@popperjs/core/modifiers/applyStyles";
    export type Obj = {
        [key: string]: any;
    };
    export type VisualViewport = EventTarget & {
        width: number;
        height: number;
        offsetLeft: number;
        offsetTop: number;
        scale: number;
    };
    export type Window = {
        innerHeight: number;
        offsetHeight: number;
        innerWidth: number;
        offsetWidth: number;
        pageXOffset: number;
        pageYOffset: number;
        getComputedStyle: typeof getComputedStyle;
        addEventListener(type: any, listener: any, optionsOrUseCapture?: any): void;
        removeEventListener(type: any, listener: any, optionsOrUseCapture?: any): void;
        Element: Element;
        HTMLElement: HTMLElement;
        Node: Node;
        toString(): "[object Window]";
        devicePixelRatio: number;
        visualViewport?: VisualViewport;
        ShadowRoot: ShadowRoot;
    };
    export type Rect = {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    export type Offsets = {
        y: number;
        x: number;
    };
    export type PositioningStrategy = "absolute" | "fixed";
    export type StateRects = {
        reference: Rect;
        popper: Rect;
    };
    export type StateOffsets = {
        popper: Offsets;
        arrow?: Offsets;
    };
    type OffsetData = {
        [key in Placement]?: Offsets;
    };
    export type State = {
        elements: {
            reference: Element | VirtualElement;
            popper: HTMLElement;
            arrow?: HTMLElement;
        };
        options: OptionsGeneric<any>;
        placement: Placement;
        strategy: PositioningStrategy;
        orderedModifiers: Array<Modifier<any, any>>;
        rects: StateRects;
        scrollParents: {
            reference: Array<Element | Window | VisualViewport>;
            popper: Array<Element | Window | VisualViewport>;
        };
        styles: {
            [key: string]: Partial<CSSStyleDeclaration>;
        };
        attributes: {
            [key: string]: {
                [key: string]: string | boolean;
            };
        };
        modifiersData: {
            arrow?: {
                x?: number;
                y?: number;
                centerOffset: number;
            };
            hide?: {
                isReferenceHidden: boolean;
                hasPopperEscaped: boolean;
                referenceClippingOffsets: SideObject;
                popperEscapeOffsets: SideObject;
            };
            offset?: OffsetData;
            preventOverflow?: Offsets;
            popperOffsets?: Offsets;
            [key: string]: any;
        };
        reset: boolean;
    };
    type SetAction<S> = S | ((prev: S) => S);
    export type Instance = {
        state: State;
        destroy: () => void;
        forceUpdate: () => void;
        update: () => Promise<Partial<State>>;
        setOptions: (setOptionsAction: SetAction<Partial<OptionsGeneric<any>>>) => Promise<Partial<State>>;
    };
    export type ModifierArguments<Options extends Obj> = {
        state: State;
        instance: Instance;
        options: Partial<Options>;
        name: string;
    };
    export type Modifier<Name, Options> = {
        name: Name;
        enabled: boolean;
        phase: ModifierPhases;
        requires?: Array<string>;
        requiresIfExists?: Array<string>;
        fn: (arg0: ModifierArguments<Options>) => State | void;
        effect?: (arg0: ModifierArguments<Options>) => (() => void) | void;
        options?: Partial<Options>;
        data?: Obj;
    };
    export type StrictModifiers = Partial<OffsetModifier> | Partial<ApplyStylesModifier> | Partial<ArrowModifier> | Partial<HideModifier> | Partial<ComputeStylesModifier> | Partial<EventListenersModifier> | Partial<FlipModifier> | Partial<PreventOverflowModifier> | Partial<PopperOffsetsModifier>;
    export type EventListeners = {
        scroll: boolean;
        resize: boolean;
    };
    export type Options = {
        placement: Placement;
        modifiers: Array<Partial<Modifier<any, any>>>;
        strategy: PositioningStrategy;
        onFirstUpdate?: (arg0: Partial<State>) => void;
    };
    export type OptionsGeneric<TModifier> = {
        placement: Placement;
        modifiers: Array<TModifier>;
        strategy: PositioningStrategy;
        onFirstUpdate?: (arg0: Partial<State>) => void;
    };
    export type UpdateCallback = (arg0: State) => void;
    export type ClientRectObject = {
        x: number;
        y: number;
        top: number;
        left: number;
        right: number;
        bottom: number;
        width: number;
        height: number;
    };
    export type SideObject = {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
    export type Padding = number | Partial<SideObject>;
    export type VirtualElement = {
        getBoundingClientRect: () => ClientRect | DOMRect;
        contextElement?: Element;
    };
    export {};
}
declare module "@popperjs/core/utils/detectOverflow" {
    import type { State, SideObject, Padding } from "@popperjs/core/types";
    import type { Placement, Boundary, RootBoundary, Context } from "@popperjs/core/enums";
    export type Options = {
        placement: Placement;
        boundary: Boundary;
        rootBoundary: RootBoundary;
        elementContext: Context;
        altBoundary: boolean;
        padding: Padding;
    };
    export type detectOverflow = (state: State, options?: Partial<Options>) => SideObject;
    export default detectOverflow;
}
declare module "@popperjs/core/createPopper" {
    import type { OptionsGeneric, Modifier, Instance, VirtualElement } from "@popperjs/core/types";
    import detectOverflow from "@popperjs/core/utils/detectOverflow";
    type PopperGeneratorArgs = {
        defaultModifiers?: Array<Modifier<any, any>>;
        defaultOptions?: Partial<OptionsGeneric<any>>;
    };
    export function popperGenerator(generatorOptions?: PopperGeneratorArgs): <TModifier extends Partial<Modifier<any, any>>>(reference: Element | VirtualElement, popper: HTMLElement, options?: Partial<OptionsGeneric<TModifier>>) => Instance;
    export const createPopper: <TModifier extends Partial<Modifier<any, any>>>(reference: Element | VirtualElement, popper: HTMLElement, options?: Partial<OptionsGeneric<TModifier>>) => Instance;
    export { detectOverflow };
}
declare module "@popperjs/core/modifiers/index" {
    export { default as applyStyles } from "@popperjs/core/modifiers/applyStyles";
    export { default as arrow } from "@popperjs/core/modifiers/arrow";
    export { default as computeStyles } from "@popperjs/core/modifiers/computeStyles";
    export { default as eventListeners } from "@popperjs/core/modifiers/eventListeners";
    export { default as flip } from "@popperjs/core/modifiers/flip";
    export { default as hide } from "@popperjs/core/modifiers/hide";
    export { default as offset } from "@popperjs/core/modifiers/offset";
    export { default as popperOffsets } from "@popperjs/core/modifiers/popperOffsets";
    export { default as preventOverflow } from "@popperjs/core/modifiers/preventOverflow";
}
declare module "@popperjs/core/popper-lite" {
    import { popperGenerator, detectOverflow } from "@popperjs/core/createPopper";
    export * from "@popperjs/core/types";
    const defaultModifiers: (import("@popperjs/core/modifiers/popperOffsets").PopperOffsetsModifier | import("@popperjs/core/modifiers/eventListeners").EventListenersModifier | import("@popperjs/core/modifiers/computeStyles").ComputeStylesModifier | import("@popperjs/core/modifiers/applyStyles").ApplyStylesModifier)[];
    const createPopper: <TModifier extends Partial<import("@popperjs/core/types").Modifier<any, any>>>(reference: Element | import("@popperjs/core/types").VirtualElement, popper: HTMLElement, options?: Partial<import("@popperjs/core/types").OptionsGeneric<TModifier>>) => import("@popperjs/core/types").Instance;
    export { createPopper, popperGenerator, defaultModifiers, detectOverflow };
}
declare module "@popperjs/core/popper" {
    import { popperGenerator, detectOverflow } from "@popperjs/core/createPopper";
    export * from "@popperjs/core/types";
    const defaultModifiers: (import("@popperjs/core/modifiers/popperOffsets").PopperOffsetsModifier | import("@popperjs/core/modifiers/flip").FlipModifier | import("@popperjs/core/modifiers/hide").HideModifier | import("@popperjs/core/modifiers/offset").OffsetModifier | import("@popperjs/core/modifiers/eventListeners").EventListenersModifier | import("@popperjs/core/modifiers/computeStyles").ComputeStylesModifier | import("@popperjs/core/modifiers/arrow").ArrowModifier | import("@popperjs/core/modifiers/preventOverflow").PreventOverflowModifier | import("@popperjs/core/modifiers/applyStyles").ApplyStylesModifier)[];
    const createPopper: <TModifier extends Partial<import("@popperjs/core/types").Modifier<any, any>>>(reference: Element | import("@popperjs/core/types").VirtualElement, popper: HTMLElement, options?: Partial<import("@popperjs/core/types").OptionsGeneric<TModifier>>) => import("@popperjs/core/types").Instance;
    export { createPopper, popperGenerator, defaultModifiers, detectOverflow };
    export { createPopper as createPopperLite } from "@popperjs/core/popper-lite";
    export * from "@popperjs/core/modifiers/index";
}
declare module "@popperjs/core/index" {
    export * from "@popperjs/core/types";
    export * from "@popperjs/core/enums";
    export * from "@popperjs/core/modifiers/index";
    export { popperGenerator, detectOverflow, createPopper as createPopperBase } from "@popperjs/core/createPopper";
    export { createPopper } from "@popperjs/core/popper";
    export { createPopper as createPopperLite } from "@popperjs/core/popper-lite";
}
declare module "@popperjs/core/popper-base" {
    import { createPopper, popperGenerator, detectOverflow } from "@popperjs/core/createPopper";
    export * from "@popperjs/core/types";
    export { createPopper, popperGenerator, detectOverflow };
}
declare module "@popperjs/core/dom-utils/contains" {
    export type contains = (parent: Element, child: Element) => boolean;
    export default contains;
}
declare module "@popperjs/core/dom-utils/getBoundingClientRect" {
    import type { ClientRectObject, VirtualElement } from "@popperjs/core/types";
    export type getBoundingClientRect = (element: Element | VirtualElement, includeScale?: boolean) => ClientRectObject;
    export default getBoundingClientRect;
}
declare module "@popperjs/core/dom-utils/getClippingRect" {
    import type { ClientRectObject } from "@popperjs/core/types";
    import type { Boundary, RootBoundary } from "@popperjs/core/enums";
    export type getClippingRect = (element: Element, boundary: Boundary, rootBoundary: RootBoundary) => ClientRectObject;
    export default getClippingRect;
}
declare module "@popperjs/core/dom-utils/getCompositeRect" {
    import type { Rect, VirtualElement, Window } from "@popperjs/core/types";
    export type getCompositeRect = (elementOrVirtualElement: Element | VirtualElement, offsetParent: Element | Window, isFixed?: boolean) => Rect;
    export default getCompositeRect;
}
declare module "@popperjs/core/dom-utils/getComputedStyle" {
    export type getComputedStyle = (element: Element) => CSSStyleDeclaration;
    export default getComputedStyle;
}
declare module "@popperjs/core/dom-utils/getDocumentElement" {
    import type { Window } from "@popperjs/core/types";
    export type getDocumentElement = (element: Element | Window) => HTMLElement;
    export default getDocumentElement;
}
declare module "@popperjs/core/dom-utils/getDocumentRect" {
    import type { Rect } from "@popperjs/core/types";
    export type getDocumentRect = (element: HTMLElement) => Rect;
    export default getDocumentRect;
}
declare module "@popperjs/core/dom-utils/getHTMLElementScroll" {
    export type getHTMLElementScroll = (element: HTMLElement) => {
        scrollLeft: number;
        scrollTop: number;
    };
    export default getHTMLElementScroll;
}
declare module "@popperjs/core/dom-utils/getLayoutRect" {
    import type { Rect } from "@popperjs/core/types";
    export type getLayoutRect = (element: HTMLElement) => Rect;
    export default getLayoutRect;
}
declare module "@popperjs/core/dom-utils/getNodeName" {
    import type { Window } from "@popperjs/core/types";
    export type getNodeName = (element: (Node | null | undefined) | Window) => string | null | undefined;
    export default getNodeName;
}
declare module "@popperjs/core/dom-utils/getNodeScroll" {
    import type { Window } from "@popperjs/core/types";
    export type getNodeScroll = (node: Node | Window) => {
        scrollLeft: any;
        scrollTop: any;
    };
    export default getNodeScroll;
}
declare module "@popperjs/core/dom-utils/getOffsetParent" {
    export type getOffsetParent = (element: Element) => any;
    export default getOffsetParent;
}
declare module "@popperjs/core/dom-utils/getParentNode" {
    export type getParentNode = (element: Node | ShadowRoot) => Node;
    export default getParentNode;
}
declare module "@popperjs/core/dom-utils/getScrollParent" {
    export type getScrollParent = (node: Node) => HTMLElement;
    export default getScrollParent;
}
declare module "@popperjs/core/dom-utils/getViewportRect" {
    export type getViewportRect = (element: Element) => {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    export default getViewportRect;
}
declare module "@popperjs/core/dom-utils/getWindow" {
    export type getWindow = (node: any) => any;
    export default getWindow;
}
declare module "@popperjs/core/dom-utils/getWindowScroll" {
    import type { Window } from "@popperjs/core/types";
    export type getWindowScroll = (node: Node | Window) => {
        scrollLeft: any;
        scrollTop: any;
    };
    export default getWindowScroll;
}
declare module "@popperjs/core/dom-utils/getWindowScrollBarX" {
    export type getWindowScrollBarX = (element: Element) => number;
    export default getWindowScrollBarX;
}
declare module "@popperjs/core/dom-utils/instanceOf" {
    function isElement(node: unknown): boolean;
    function isHTMLElement(node: unknown): boolean;
    function isShadowRoot(node: unknown): boolean;
    export { isElement, isHTMLElement, isShadowRoot };
}
declare module "@popperjs/core/dom-utils/isScrollParent" {
    export type isScrollParent = (element: HTMLElement) => boolean;
    export default isScrollParent;
}
declare module "@popperjs/core/dom-utils/isTableElement" {
    export type isTableElement = (element: Element) => boolean;
    export default isTableElement;
}
declare module "@popperjs/core/dom-utils/listScrollParents" {
    import type { Window, VisualViewport } from "@popperjs/core/types";
    export type listScrollParents = (element: Node, list?: Array<Element | Window>) => Array<Element | Window | VisualViewport>;
    export default listScrollParents;
}
declare module "@popperjs/core/utils/computeAutoPlacement" {
    import type { State, Padding } from "@popperjs/core/types";
    import type { Placement, ComputedPlacement, Boundary, RootBoundary } from "@popperjs/core/enums";
    type Options = {
        placement: Placement;
        padding: Padding;
        boundary: Boundary;
        rootBoundary: RootBoundary;
        flipVariations: boolean;
        allowedAutoPlacements?: Array<Placement>;
    };
    export type computeAutoPlacement = (state: Partial<State>, options?: Options) => Array<ComputedPlacement>;
    export default computeAutoPlacement;
    export {};
}
declare module "@popperjs/core/utils/computeOffsets" {
    import type { Rect, PositioningStrategy, Offsets, ClientRectObject } from "@popperjs/core/types";
    import { Placement } from "@popperjs/core/enums";
    export type computeOffsets = ({ reference, element, placement }: {
        reference: Rect | ClientRectObject;
        element: Rect | ClientRectObject;
        strategy: PositioningStrategy;
        placement?: Placement;
    }) => Offsets;
    export default computeOffsets;
}
declare module "@popperjs/core/utils/debounce" {
    export type debounce = <T>(fn: (...args: Array<any>) => any) => () => Promise<T>;
    export default debounce;
}
declare module "@popperjs/core/utils/expandToHashMap" {
    export type expandToHashMap = <T extends number | string | boolean, K extends string>(value: T, keys: Array<K>) => {
        [key: string]: T;
    };
    export default expandToHashMap;
}
declare module "@popperjs/core/utils/format" {
    export type format = (str: string, ...args: Array<string>) => string;
    export default format;
}
declare module "@popperjs/core/utils/getAltAxis" {
    export type getAltAxis = (axis: "x" | "y") => "x" | "y";
    export default getAltAxis;
}
declare module "@popperjs/core/utils/getAltLen" {
    export type getAltLen = (len: "width" | "height") => "width" | "height";
    export default getAltLen;
}
declare module "@popperjs/core/utils/getBasePlacement" {
    import { BasePlacement, Placement, auto } from "@popperjs/core/enums";
    export type getBasePlacement = (placement: Placement | typeof auto) => BasePlacement;
    export default getBasePlacement;
}
declare module "@popperjs/core/utils/getFreshSideObject" {
    import type { SideObject } from "@popperjs/core/types";
    export type getFreshSideObject = () => SideObject;
    export default getFreshSideObject;
}
declare module "@popperjs/core/utils/getMainAxisFromPlacement" {
    import type { Placement } from "@popperjs/core/enums";
    export type getMainAxisFromPlacement = (placement: Placement) => "x" | "y";
    export default getMainAxisFromPlacement;
}
declare module "@popperjs/core/utils/getOppositePlacement" {
    import type { Placement } from "@popperjs/core/enums";
    export type getOppositePlacement = (placement: Placement) => Placement;
    export default getOppositePlacement;
}
declare module "@popperjs/core/utils/getOppositeVariationPlacement" {
    import type { Placement } from "@popperjs/core/enums";
    export type getOppositeVariationPlacement = (placement: Placement) => Placement;
    export default getOppositeVariationPlacement;
}
declare module "@popperjs/core/utils/getVariation" {
    import { Variation, Placement } from "@popperjs/core/enums";
    export type getVariation = (placement: Placement) => Variation | null | undefined;
    export default getVariation;
}
declare module "@popperjs/core/utils/math" {
    export const max: (...values: number[]) => number;
    export const min: (...values: number[]) => number;
    export const round: (x: number) => number;
}
declare module "@popperjs/core/utils/mergeByName" {
    import type { Modifier } from "@popperjs/core/types";
    export type mergeByName = (modifiers: Array<Partial<Modifier<any, any>>>) => Array<Partial<Modifier<any, any>>>;
    export default mergeByName;
}
declare module "@popperjs/core/utils/mergePaddingObject" {
    import type { SideObject } from "@popperjs/core/types";
    export type mergePaddingObject = (paddingObject: Partial<SideObject>) => SideObject;
    export default mergePaddingObject;
}
declare module "@popperjs/core/utils/orderModifiers" {
    import type { Modifier } from "@popperjs/core/types";
    export type orderModifiers = (modifiers: Array<Modifier<any, any>>) => Array<Modifier<any, any>>;
    export default orderModifiers;
}
declare module "@popperjs/core/utils/rectToClientRect" {
    import type { Rect, ClientRectObject } from "@popperjs/core/types";
    export type rectToClientRect = (rect: Rect) => ClientRectObject;
    export default rectToClientRect;
}
declare module "@popperjs/core/utils/uniqueBy" {
    export type uniqueBy<T> = (arr: Array<T>, fn: (arg0: T) => any) => Array<T>;
    export default uniqueBy;
}
declare module "@popperjs/core/utils/validateModifiers" {
    export type validateModifiers = (modifiers: Array<any>) => void;
    export default validateModifiers;
}
declare module "@popperjs/core/utils/within" {
    export function within(min: number, value: number, max: number): number;
    export function withinMaxClamp(min: number, value: number, max: number): number;
}
