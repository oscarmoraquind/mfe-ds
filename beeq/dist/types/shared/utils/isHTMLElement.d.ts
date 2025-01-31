/**
 * Check if value is the HTMLElement defined by tag
 * @param target the value to be check
 * @param tag valid HTMLElement
 * @returns {boolean} true if the target nodeName is the tag
 */
export declare const isHTMLElement: <T extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap>(target: unknown, tag: T) => target is HTMLElementTagNameMap[T];
