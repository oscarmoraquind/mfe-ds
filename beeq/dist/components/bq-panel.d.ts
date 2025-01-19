import type { Components, JSX } from "../types/components";

interface BqPanel extends Components.BqPanel, HTMLElement {}
export const BqPanel: {
    prototype: BqPanel;
    new (): BqPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
