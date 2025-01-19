import type { Components, JSX } from "../types/components";

interface BqLogo extends Components.BqLogo, HTMLElement {}
export const BqLogo: {
    prototype: BqLogo;
    new (): BqLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
