import type { Components, JSX } from "../types/components";

interface BqCard extends Components.BqCard, HTMLElement {}
export const BqCard: {
    prototype: BqCard;
    new (): BqCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
