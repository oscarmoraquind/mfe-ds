import type { Components, JSX } from "../types/components";

interface BqInput extends Components.BqInput, HTMLElement {}
export const BqInput: {
    prototype: BqInput;
    new (): BqInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
