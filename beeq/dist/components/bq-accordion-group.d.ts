import type { Components, JSX } from "../types/components";

interface BqAccordionGroup extends Components.BqAccordionGroup, HTMLElement {}
export const BqAccordionGroup: {
    prototype: BqAccordionGroup;
    new (): BqAccordionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
