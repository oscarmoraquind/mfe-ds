import type { Components, JSX } from "../types/components";

interface BqBreadcrumbItem extends Components.BqBreadcrumbItem, HTMLElement {}
export const BqBreadcrumbItem: {
    prototype: BqBreadcrumbItem;
    new (): BqBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
