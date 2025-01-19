/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
/**
 * Check if value is the HTMLElement defined by tag
 * @param target the value to be check
 * @param tag valid HTMLElement
 * @returns {boolean} true if the target nodeName is the tag
 */
const isHTMLElement = (target, tag) => {
    return target instanceof Node && target.nodeName.toLowerCase() === tag;
};

export { isHTMLElement as i };

//# sourceMappingURL=isHTMLElement-0271eefe.js.map