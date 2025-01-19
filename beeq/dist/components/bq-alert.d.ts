import type { Components, JSX } from "../types/components";

interface BqAlert extends Components.BqAlert, HTMLElement {}
export const BqAlert: {
    prototype: BqAlert;
    new (): BqAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
