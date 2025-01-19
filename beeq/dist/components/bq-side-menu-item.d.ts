import type { Components, JSX } from "../types/components";

interface BqSideMenuItem extends Components.BqSideMenuItem, HTMLElement {}
export const BqSideMenuItem: {
    prototype: BqSideMenuItem;
    new (): BqSideMenuItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
