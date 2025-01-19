import type { Components, JSX } from "../types/components";

interface BqIcon extends Components.BqIcon, HTMLElement {}
export const BqIcon: {
    prototype: BqIcon;
    new (): BqIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
