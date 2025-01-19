import type { Components, JSX } from "../types/components";

interface BqSpinner extends Components.BqSpinner, HTMLElement {}
export const BqSpinner: {
    prototype: BqSpinner;
    new (): BqSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
