import type { Components, JSX } from "../types/components";

interface BqNotification extends Components.BqNotification, HTMLElement {}
export const BqNotification: {
    prototype: BqNotification;
    new (): BqNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
