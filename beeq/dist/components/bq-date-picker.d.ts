import type { Components, JSX } from "../types/components";

interface BqDatePicker extends Components.BqDatePicker, HTMLElement {}
export const BqDatePicker: {
    prototype: BqDatePicker;
    new (): BqDatePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
