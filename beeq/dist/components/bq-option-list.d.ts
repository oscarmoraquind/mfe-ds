import type { Components, JSX } from "../types/components";

interface BqOptionList extends Components.BqOptionList, HTMLElement {}
export const BqOptionList: {
    prototype: BqOptionList;
    new (): BqOptionList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
