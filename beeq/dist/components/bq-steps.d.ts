import type { Components, JSX } from "../types/components";

interface BqSteps extends Components.BqSteps, HTMLElement {}
export const BqSteps: {
    prototype: BqSteps;
    new (): BqSteps;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
