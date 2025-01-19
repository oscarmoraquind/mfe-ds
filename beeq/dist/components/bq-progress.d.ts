import type { Components, JSX } from "../types/components";

interface BqProgress extends Components.BqProgress, HTMLElement {}
export const BqProgress: {
    prototype: BqProgress;
    new (): BqProgress;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
