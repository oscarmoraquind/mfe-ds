import type { Components, JSX } from "../types/components";

interface BqOptionGroup extends Components.BqOptionGroup, HTMLElement {}
export const BqOptionGroup: {
    prototype: BqOptionGroup;
    new (): BqOptionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
