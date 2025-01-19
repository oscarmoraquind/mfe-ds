import type { Components, JSX } from "../types/components";

interface BqOption extends Components.BqOption, HTMLElement {}
export const BqOption: {
    prototype: BqOption;
    new (): BqOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
