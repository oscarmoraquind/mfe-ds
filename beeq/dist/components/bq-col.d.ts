import type { Components, JSX } from "../types/components";

interface BqCol extends Components.BqCol, HTMLElement {}
export const BqCol: {
    prototype: BqCol;
    new (): BqCol;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
