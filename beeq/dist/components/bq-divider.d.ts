import type { Components, JSX } from "../types/components";

interface BqDivider extends Components.BqDivider, HTMLElement {}
export const BqDivider: {
    prototype: BqDivider;
    new (): BqDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
