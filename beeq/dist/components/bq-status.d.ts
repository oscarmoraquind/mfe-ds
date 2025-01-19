import type { Components, JSX } from "../types/components";

interface BqStatus extends Components.BqStatus, HTMLElement {}
export const BqStatus: {
    prototype: BqStatus;
    new (): BqStatus;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
