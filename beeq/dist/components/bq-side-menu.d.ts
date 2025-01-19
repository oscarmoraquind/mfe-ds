import type { Components, JSX } from "../types/components";

interface BqSideMenu extends Components.BqSideMenu, HTMLElement {}
export const BqSideMenu: {
    prototype: BqSideMenu;
    new (): BqSideMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
