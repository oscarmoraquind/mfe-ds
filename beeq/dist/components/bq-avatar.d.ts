import type { Components, JSX } from "../types/components";

interface BqAvatar extends Components.BqAvatar, HTMLElement {}
export const BqAvatar: {
    prototype: BqAvatar;
    new (): BqAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
