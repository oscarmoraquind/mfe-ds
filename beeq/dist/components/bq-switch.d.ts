import type { Components, JSX } from "../types/components";

interface BqSwitch extends Components.BqSwitch, HTMLElement {}
export const BqSwitch: {
    prototype: BqSwitch;
    new (): BqSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
