import type { Components, JSX } from "../types/components";

interface BqDrawer extends Components.BqDrawer, HTMLElement {}
export const BqDrawer: {
    prototype: BqDrawer;
    new (): BqDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
