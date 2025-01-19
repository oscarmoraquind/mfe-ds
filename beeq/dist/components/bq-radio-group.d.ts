import type { Components, JSX } from "../types/components";

interface BqRadioGroup extends Components.BqRadioGroup, HTMLElement {}
export const BqRadioGroup: {
    prototype: BqRadioGroup;
    new (): BqRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
