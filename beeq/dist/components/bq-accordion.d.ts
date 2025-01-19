import type { Components, JSX } from "../types/components";

interface BqAccordion extends Components.BqAccordion, HTMLElement {}
export const BqAccordion: {
    prototype: BqAccordion;
    new (): BqAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
