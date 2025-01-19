import type { Components, JSX } from "../types/components";

interface BqStepItem extends Components.BqStepItem, HTMLElement {}
export const BqStepItem: {
    prototype: BqStepItem;
    new (): BqStepItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
