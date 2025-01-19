import type { Components, JSX } from "../types/components";

interface BqTabGroup extends Components.BqTabGroup, HTMLElement {}
export const BqTabGroup: {
    prototype: BqTabGroup;
    new (): BqTabGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
