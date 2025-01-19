import type { Components, JSX } from "../types/components";

interface BqSelect extends Components.BqSelect, HTMLElement {}
export const BqSelect: {
    prototype: BqSelect;
    new (): BqSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
