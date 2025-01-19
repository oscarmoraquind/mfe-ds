export interface IOptions {
    recurse: boolean;
    maxLevel?: number;
}
/**
 * Iterates over all of its assigned element and text nodes of a given slot and returns the concatenated HTML as a string.
 *
 * @param {HTMLSlotElement} slot - Slot HTML element
 * @return {string} The concatenated HTML as a string
 */
export declare function getInnerHTML(slot: HTMLSlotElement): string;
/**
 * Iterates over all of its assigned text nodes of a given slot and returns the concatenated text as a string.
 *
 * @param {HTMLSlotElement} slot - Slot HTML element
 * @return {string} The concatenated text as a string
 */
export declare function getTextContent(slot: HTMLSlotElement): string;
/**
 * Iterates over all of its assigned text nodes of a given slot and returns the concatenated text as a string.
 *
 * @param {HTMLSlotElement} slot - Slot HTML element
 * @param {IOptions} options - Options to retrieve text
 * @return {string} The concatenated text as a string
 */
export declare function getTextContent(slot: HTMLSlotElement, options: IOptions): string;
/**
 * Determines whether a slot with the given name exists in an element.
 *
 * @param {HTMLElement} el - The HTMl element to check
 * @param {string} name - Name of the slot to check inside the HTML element
 * @return {boolean} True or false if the given HTML element has slot
 */
export declare function hasSlot(el: HTMLElement, name: string): boolean;
/**
 * Will return whether if a given slot have HTML children elements or not.
 *
 * @param {HTMLElement} el - The HTML element that holds the slot
 * @param {string} [name] - Optional slot name
 * @return {boolean} True or false if the slot have HTML children elements
 */
export declare function hasSlotContent(el: HTMLElement, name?: string): boolean;
