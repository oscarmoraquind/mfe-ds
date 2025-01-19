/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const assetsPath = require('./assetsPath-4e001a62.js');
const clamp = require('./clamp-dbbea7bf.js');
const cssVariables = require('./cssVariables-55ad4942.js');
const debounce = require('./debounce-1f7e1176.js');
const event = require('./event-7d21e426.js');
const getNextElement = require('./getNextElement-4b790655.js');
const isClient = require('./isClient-c22372aa.js');
const isDefined = require('./isDefined-5f750401.js');
require('./index-1cbd3f9e.js');
const isNil = require('./isNil-f93429a2.js');
const isHTMLElement = require('./isHTMLElement-729e6be0.js');
const isString = require('./isString-f8847c11.js');
const props = require('./props-2653e993.js');
const slot = require('./slot-2fee189a.js');
const transition = require('./transition-be315790.js');

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
    if (isNil.isNil(value)) {
        return true;
    }
    else if ('size' in value) {
        return !isDefined.isDefined(value.size);
    }
    else {
        return !isDefined.isDefined(Object.values(value).length);
    }
};

exports.getBasePath = assetsPath.getBasePath;
exports.setBasePath = assetsPath.setBasePath;
exports.clamp = clamp.clamp;
exports.getCSSVariableValue = cssVariables.getCSSVariableValue;
exports.getColorCSSVariable = cssVariables.getColorCSSVariable;
exports.debounce = debounce.debounce;
exports.setRafTimeout = debounce.setRafTimeout;
exports.isEventTargetChildOfElement = event.isEventTargetChildOfElement;
exports.getNextElement = getNextElement.getNextElement;
exports.isClient = isClient.isClient;
exports.isDefined = isDefined.isDefined;
exports.isNil = isNil.isNil;
exports.isHTMLElement = isHTMLElement.isHTMLElement;
exports.isString = isString.isString;
exports.validatePropValue = props.validatePropValue;
exports.getInnerHTML = slot.getInnerHTML;
exports.getTextContent = slot.getTextContent;
exports.hasSlot = slot.hasSlot;
exports.hasSlotContent = slot.hasSlotContent;
exports.enter = transition.enter;
exports.leave = transition.leave;
exports.toggle = transition.toggle;
exports.getRandomFromArray = getRandomFromArray;
exports.isEmpty = isEmpty;

//# sourceMappingURL=index.cjs.js.map