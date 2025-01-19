import type { Components, JSX } from "../types/components";

interface BqTextarea extends Components.BqTextarea, HTMLElement {}
export const BqTextarea: {
    prototype: BqTextarea;
    new (): BqTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
