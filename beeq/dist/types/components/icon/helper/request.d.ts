export declare const iconContent: Map<string, string>;
/**
 * Retrieves the SVG content for a given URL, fetching and caching it if necessary.
 * @param {string} url - The URL to fetch the SVG from.
 * @param {boolean} sanitize - Whether to sanitize the SVG content.
 * @returns {Promise<unknown>} - A promise that resolves to the SVG content.
 */
export declare const getSvgContent: (url: string, sanitize: boolean) => Promise<unknown>;
/**
 * Validates and sanitizes the SVG content.
 * @param {string} svgContent - The SVG content to validate.
 * @returns {string} - The sanitized SVG content.
 */
export declare const validateContent: (svgContent: string) => string;
/**
 * Checks if an HTML element is valid (i.e., does not contain scripts or event handlers).
 * @param {HTMLElement} elm - The element to check.
 * @returns {boolean} - True if the element is valid, false otherwise.
 */
export declare const isValid: (elm: Element) => boolean;
