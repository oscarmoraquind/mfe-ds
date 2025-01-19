import type { Components, JSX } from "../types/components";

interface BqBreadcrumb extends Components.BqBreadcrumb, HTMLElement {}
export const BqBreadcrumb: {
    prototype: BqBreadcrumb;
    new (): BqBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
