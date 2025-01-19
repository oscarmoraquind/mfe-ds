import type { Components, JSX } from "../types/components";

interface BqButton extends Components.BqButton, HTMLElement {}
export const BqButton: {
    prototype: BqButton;
    new (): BqButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
