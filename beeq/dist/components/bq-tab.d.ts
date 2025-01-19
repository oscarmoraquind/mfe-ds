import type { Components, JSX } from "../types/components";

interface BqTab extends Components.BqTab, HTMLElement {}
export const BqTab: {
    prototype: BqTab;
    new (): BqTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
