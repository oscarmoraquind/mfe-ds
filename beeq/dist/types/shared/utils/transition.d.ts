/**
 * Transition an element entry
 *
 * @param element The element to enter
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
export declare const enter: (element: HTMLElement, transitionName?: string | null) => Promise<void>;
/**
 * Transition an element exit
 *
 * @param element The element to leave
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
export declare const leave: (element: HTMLElement, transitionName?: string | null) => Promise<void>;
/**
 * Toggle an element entry/exit
 *
 * @param element The element to toggle
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
export declare const toggle: (element: HTMLElement, transitionName?: string | null) => Promise<void>;
