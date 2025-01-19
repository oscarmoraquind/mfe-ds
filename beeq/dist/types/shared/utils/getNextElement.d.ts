/**
 * Gets the next element that is not disabled
 *
 * @param {Array} elements - The array to search in
 * @param {Numebr} startAt - Position to start at
 * @param {String} direction - The direction to look on
 * @returns {Element} Next available element
 */
export declare const getNextElement: <T extends {
    disabled: boolean;
}>(elements: T[], startAt?: number, direction?: "forward" | "backward") => T;
