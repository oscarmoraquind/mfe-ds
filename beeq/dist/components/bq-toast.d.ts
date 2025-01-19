import type { Components, JSX } from "../types/components";

interface BqToast extends Components.BqToast, HTMLElement {}
export const BqToast: {
    prototype: BqToast;
    new (): BqToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
