import type { Components, JSX } from "../types/components";

interface BqTooltip extends Components.BqTooltip, HTMLElement {}
export const BqTooltip: {
    prototype: BqTooltip;
    new (): BqTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
