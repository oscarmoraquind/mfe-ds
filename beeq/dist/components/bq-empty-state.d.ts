import type { Components, JSX } from "../types/components";

interface BqEmptyState extends Components.BqEmptyState, HTMLElement {}
export const BqEmptyState: {
    prototype: BqEmptyState;
    new (): BqEmptyState;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
