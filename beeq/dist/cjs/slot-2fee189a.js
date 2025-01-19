/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

/*=========================================================================================
= Credit:                                                                                =
= https://github.com/shoelace-style/shoelace/blob/next/src/utilities/slot.ts             =
=========================================================================================*/
function isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
}
function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
}
function getText(node, currentLevel = 1, maxLevel = Infinity) {
    let text = '';
    if (currentLevel <= maxLevel) {
        if (isTextNode(node)) {
            text += node.textContent;
        }
        else if (isElementNode(node) && node.hasChildNodes()) {
            const nextLevel = currentLevel + 1;
            node.childNodes.forEach((node) => {
                text += getText(node, nextLevel, maxLevel);
            });
        }
    }
    return text;
}
/**
 * Iterates over all of its assigned element and text nodes of a given slot and returns the concatenated HTML as a string.
 *
 * @param {HTMLSlotElement} slot - Slot HTML element
 * @return {string} The concatenated HTML as a string
 */
function getInnerHTML(slot) {
    const nodes = slot.assignedNodes({ flatten: true });
    let html = '';
    [...nodes].forEach((node) => {
        if (isElementNode(node)) {
            html += node.outerHTML;
        }
        if (isTextNode(node)) {
            html += node.textContent;
        }
    });
    return html;
}
function getTextContent(slot, options) {
    const nodes = slot.assignedNodes({ flatten: true });
    const { recurse = false, maxLevel } = options ?? {};
    let text = '';
    [...nodes].forEach((node) => {
        text += getText(node, 1, recurse ? maxLevel : 1);
    });
    return text.trim();
}
/**
 * Determines whether a slot with the given name exists in an element.
 *
 * @param {HTMLElement} el - The HTMl element to check
 * @param {string} name - Name of the slot to check inside the HTML element
 * @return {boolean} True or false if the given HTML element has slot
 */
function hasSlot(el, name) {
    return (Array.from(el.querySelectorAll('[slot]')).filter((slottedEl) => slottedEl.slot === name).length > 0);
}
/**
 * Will return whether if a given slot have HTML children elements or not.
 *
 * @param {HTMLElement} el - The HTML element that holds the slot
 * @param {string} [name] - Optional slot name
 * @return {boolean} True or false if the slot have HTML children elements
 */
function hasSlotContent(el, name) {
    const slotSelector = name ? `[name='${name}']` : '';
    const slotContent = el.querySelector(`slot${slotSelector}`)?.assignedElements({ flatten: true });
    if (!slotContent || !Array.isArray(slotContent))
        return false;
    return !!slotContent.length;
}

exports.getInnerHTML = getInnerHTML;
exports.getTextContent = getTextContent;
exports.hasSlot = hasSlot;
exports.hasSlotContent = hasSlotContent;

//# sourceMappingURL=slot-2fee189a.js.map