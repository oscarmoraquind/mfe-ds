import type { Components, JSX } from "../types/components";

interface BqTag extends Components.BqTag, HTMLElement {}
export const BqTag: {
    prototype: BqTag;
    new (): BqTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
