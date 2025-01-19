import type { Components, JSX } from "../types/components";

interface BqBadge extends Components.BqBadge, HTMLElement {}
export const BqBadge: {
    prototype: BqBadge;
    new (): BqBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
