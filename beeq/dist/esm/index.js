/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
export { g as getBasePath, s as setBasePath } from './assetsPath-fae1379f.js';
export { c as clamp } from './clamp-efa6c596.js';
export { a as getCSSVariableValue, g as getColorCSSVariable } from './cssVariables-3665b51c.js';
export { d as debounce, s as setRafTimeout } from './debounce-3e72f418.js';
export { i as isEventTargetChildOfElement } from './event-9ce1db79.js';
export { g as getNextElement } from './getNextElement-8bcc2025.js';
export { i as isClient } from './isClient-c6eae7ba.js';
import { i as isDefined } from './isDefined-29699255.js';
export { i as isDefined } from './isDefined-29699255.js';
import './index-9e248ad1.js';
import { i as isNil } from './isNil-2290f64e.js';
export { i as isNil } from './isNil-2290f64e.js';
export { i as isHTMLElement } from './isHTMLElement-0271eefe.js';
export { i as isString } from './isString-9820a2b7.js';
export { v as validatePropValue } from './props-3bf7f546.js';
export { g as getInnerHTML, a as getTextContent, h as hasSlot, b as hasSlotContent } from './slot-58bfedb5.js';
export { e as enter, l as leave, t as toggle } from './transition-916fd7c0.js';

/**
 * Get a number of randoms items from Array
 *
 * @param {Array} arr - The array where to look
 * @param {Number} n - The number of random items to take
 * @returns {Array} An array with the number of random items specified
 */
const getRandomFromArray = (arr, n) => {
    let length = arr.length;
    const result = new Array(n);
    const taken = new Array(length);
    if (n > length)
        throw new RangeError('getRandom: more elements taken than available');
    while (n--) {
        const x = Date.now() % length;
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --length in taken ? taken[length] : length;
    }
    return result;
};

/**
 * Check if the value is an empty array, object, set, map
 * @param value the value to be checked
 * @returns {boolean} true if value is empty
 */
const isEmpty = (value) => {
    if (isNil(value)) {
        return true;
    }
    else if ('size' in value) {
        return !isDefined(value.size);
    }
    else {
        return !isDefined(Object.values(value).length);
    }
};

export { getRandomFromArray, isEmpty };

//# sourceMappingURL=index.js.map