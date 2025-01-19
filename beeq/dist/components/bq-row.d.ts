import type { Components, JSX } from "../types/components";

interface BqRow extends Components.BqRow, HTMLElement {}
export const BqRow: {
    prototype: BqRow;
    new (): BqRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
