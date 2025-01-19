import type { Components, JSX } from "../types/components";

interface BqDialog extends Components.BqDialog, HTMLElement {}
export const BqDialog: {
    prototype: BqDialog;
    new (): BqDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
