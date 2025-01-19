import type { Components, JSX } from "../types/components";

interface BqText extends Components.BqText, HTMLElement {}
export const BqText: {
    prototype: BqText;
    new (): BqText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
