import type { Components, JSX } from "../types/components";

interface BqDropdown extends Components.BqDropdown, HTMLElement {}
export const BqDropdown: {
    prototype: BqDropdown;
    new (): BqDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
