import type { Components, JSX } from "../types/components";

interface BqCheckbox extends Components.BqCheckbox, HTMLElement {}
export const BqCheckbox: {
    prototype: BqCheckbox;
    new (): BqCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
