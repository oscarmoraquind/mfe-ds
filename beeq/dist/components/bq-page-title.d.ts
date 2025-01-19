import type { Components, JSX } from "../types/components";

interface BqPageTitle extends Components.BqPageTitle, HTMLElement {}
export const BqPageTitle: {
    prototype: BqPageTitle;
    new (): BqPageTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
