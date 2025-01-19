import type { Components, JSX } from "../types/components";

interface BqSlider extends Components.BqSlider, HTMLElement {}
export const BqSlider: {
    prototype: BqSlider;
    new (): BqSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
