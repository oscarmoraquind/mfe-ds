import type { Components, JSX } from "../types/components";

interface BqRadio extends Components.BqRadio, HTMLElement {}
export const BqRadio: {
    prototype: BqRadio;
    new (): BqRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
