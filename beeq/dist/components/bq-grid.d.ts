import type { Components, JSX } from "../types/components";

interface BqGrid extends Components.BqGrid, HTMLElement {}
export const BqGrid: {
    prototype: BqGrid;
    new (): BqGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
