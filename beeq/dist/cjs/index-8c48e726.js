/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

const index = require('./index-1e4795f3.js');

/**
 * Checks if the code is running on the client side.
 * @returns {boolean} True if running on the client side, false otherwise.
 */
const isClient = () => {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
};

/**
 * Inspired by Shoelace's `getBasePath` and `setBasePath` functions.
 * https://github.com/shoelace-style/shoelace/blob/next/src/utilities/base-path.ts
 */
let beeqBasePath;
const DATA_BEEQ_ATTRIBUTE = 'data-beeq';
const DEFAULT_SVG_PATH = 'svg';
/**
 * Sets the base path for the assets.
 * @param {string} path - The base path to set.
 */
const setBasePath = (path) => {
    beeqBasePath = path;
};
/**
 * Gets the base path for the assets.
 * @param {string} subpath - An optional subpath to append to the base path.
 * @returns {string} The base path of the assets.
 */
const getBasePath = (subpath = '') => {
    if (!beeqBasePath) {
        const configScript = findConfigScript();
        const fallbackScript = configScript ? null : findFallbackScript();
        const script = configScript || fallbackScript;
        if (script) {
            const path = configScript ? script.getAttribute(DATA_BEEQ_ATTRIBUTE) : getScriptPath(script);
            setBasePath(`${path}/${DEFAULT_SVG_PATH}`);
        }
        else {
            // Fallback: use an environment variable (if set) or the default path
            setBasePath(index.Env.BEEQ_ASSETS_BASE_PATH || `./${DEFAULT_SVG_PATH}`);
        }
    }
    // Return the base path without a trailing slash. If one exists, append the subpath separated by a slash.
    const formattedSubpath = subpath ? `/${subpath.replace(/^\//, '')}` : '';
    return beeqBasePath.replace(/\/$/, '') + formattedSubpath;
};
/**
 * Finds the configuration script element.
 * @returns The configuration script element or null if not found.
 */
const findConfigScript = () => {
    if (!isClient())
        return null;
    return document.querySelector(`script[${DATA_BEEQ_ATTRIBUTE}]`);
};
/**
 * Finds the fallback script element.
 * @returns The fallback script element or null if not found.
 */
const findFallbackScript = () => {
    if (!isClient())
        return null;
    return document.querySelector(`script[src*="beeq"]`);
};
/**
 * Gets the path of a script element.
 * @param {HTMLScriptElement} script - The script element.
 * @returns The path of the script element.
 */
const getScriptPath = (script) => {
    if (!isClient())
        return '';
    const src = script.getAttribute('src');
    return src ? src.substring(0, src.lastIndexOf('/')) : '';
};

/**
 * Restricts value to a specified interval [min, max]
 *
 * @param value - value
 * @param min  - lower end of the interval
 * @param max  - upper end of the interval
 * @returns  - value in interval [min, max]
 */
const clamp = (value, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
    return Math.min(Math.max(min, value), max);
};

const CSSVALUEPREFIX = '--bq-';
/**
 * Get CSS custom property variable of a given color string value
 *
 * @param {string} colorName - Valid string value.
 * @return {string} The corresponding CSS custom property variable
 */
function getColorCSSVariable(colorName) {
    if (!isClient)
        return undefined;
    const token = `${CSSVALUEPREFIX}${colorName}`;
    const value = getComputedStyle(document.documentElement).getPropertyValue(token);
    if (!value)
        return undefined;
    return `var(${token})`;
}
/**
 * Get compiled CSS custom property value
 *
 * @param {string} variable - The variable name for which to get its value
 * @return {string} The corresponding value for the given CSS custom property
 */
function getCSSVariableValue(variable, component) {
    const styles = getComputedStyle(component);
    return String(styles.getPropertyValue(`--${variable}`)).trim();
}

/**
 * Check if the value is null or undefined
 * @param value the value to be checked
 * @returns {boolean} the value is null or undefined
 */
const isNil = (value) => {
    return value === null || value === undefined;
};

/**
 * Implements setTimeout using requestAnimationFrame. Uses setTimeout if wait is 0.
 *
 * @param {Function} func - The function to timeout.
 * @param {Number} wait - The number of milliseconds to delay.
 * @param {Any[]} args - The arguments of func.
 * @returns {void}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setRafTimeout = (func, wait, ...args) => {
    const invokeFunc = () => func(...args);
    if (wait === 0) {
        const timeoutId = setTimeout(invokeFunc, wait);
        return () => clearTimeout(timeoutId);
    }
    else {
        let rafId;
        const currentTime = performance.now();
        const cancel = () => cancelAnimationFrame(rafId);
        const handleRequestAnimationFrame = (time) => {
            const delta = time - currentTime;
            cancel();
            if (delta < wait) {
                rafId = requestAnimationFrame(handleRequestAnimationFrame);
            }
            else {
                invokeFunc();
            }
        };
        rafId = requestAnimationFrame(handleRequestAnimationFrame);
        return cancel;
    }
};

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {Number} wait - The number of milliseconds to delay.
 * @param {Boolean} immediate - If `true`, the function triggers immediately and then waits for the interval before being called again.
 * @return {Function} The new debounced function.
 */
const debounce = (func, wait = 0, immediate = false) => {
    let cancel;
    function debounceHandler(...args) {
        cancel?.();
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        function timeoutHandler(fn, context, ...args) {
            fn.apply(context, args);
        }
        if (immediate && isNil(cancel)) {
            func.apply(context, args);
        }
        cancel = setRafTimeout(timeoutHandler, wait, func, context, ...args);
    }
    return Object.assign(debounceHandler, {
        cancel: () => {
            cancel?.();
        },
    });
};

/**
 * Check if the event target is a child of the host element
 * @param event - The event to check
 * @param hostElement - The host element to check against
 * @returns True if the event target is a child of the host element
 */
const isEventTargetChildOfElement = (event, hostElement) => {
    const path = event.composedPath();
    return path.includes(hostElement);
};

/**
 * Gets the next element that is not disabled
 *
 * @param {Array} elements - The array to search in
 * @param {Numebr} startAt - Position to start at
 * @param {String} direction - The direction to look on
 * @returns {Element} Next available element
 */
const getNextElement = (elements, startAt = 0, direction = 'forward') => {
    let elementIndex = startAt;
    do {
        elementIndex = getNextIndex(elementIndex, elements.length, direction);
        if (elementIndex === startAt) {
            break;
        }
    } while (elements[elementIndex].disabled);
    return elements[elementIndex];
};
const getNextIndex = (currentIndex, length, direction) => {
    const nextIndex = currentIndex + (direction === 'forward' ? 1 : -1);
    return (length + nextIndex) % length;
};

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
 * Check is a value is not falsy
 * @param value the value to be checked
 * @returns {boolean} the value is not falsy
 */
const isDefined = (value) => {
    return isString(value) ? value.length !== 0 : Boolean(value);
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

/**
 * Check if value is the HTMLElement defined by tag
 * @param target the value to be check
 * @param tag valid HTMLElement
 * @returns {boolean} true if the target nodeName is the tag
 */
const isHTMLElement = (target, tag) => {
    return target instanceof Node && target.nodeName.toLowerCase() === tag;
};

/**
 * Check if the value is a string or not
 * @param value the value to be checked
 * @returns {boolean} the value is a string
 */
const isString = (value) => {
    const type = typeof value;
    return (type === 'string' ||
        (type === 'object' &&
            value != null &&
            !Array.isArray(value) &&
            Object.prototype.toString.call(value) == '[object String]'));
};

/**
 * Validate the element property value, if is one of the accepted values
 *
 * @param {readonly} ACCEPTED_VALUES - The list of the accepted values to check against.
 * @param {unknown} fallbackValue - The default value to assign
 * @param {Element} element - The component reference
 * @param {string} propertyName - The property name (will be used in the console notification)
 * @returns {void}
 */
const validatePropValue = (ACCEPTED_VALUES, fallbackValue, element, propertyName) => {
    const propertyValue = element[propertyName];
    // Early return if the property value is one of the accepted values
    if (ACCEPTED_VALUES.includes(propertyValue))
        return;
    // Override property with fallback value
    element[propertyName] = fallbackValue;
    // Notify developer in the browser console
    console.warn(`[${element.tagName.toUpperCase()}] Please notice that "${String(propertyName)}" should be one of ${ACCEPTED_VALUES.join('|')}`);
};

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

/* -------------------------------------------------------------------------- */
/*            Credits to MikeMcCall for the original implementation           */
/*            Github: https://github.com/mmccall10/el-transition              */
/* -------------------------------------------------------------------------- */
/**
 * Transition an element entry
 *
 * @param element The element to enter
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
const enter = async (element, transitionName = null) => {
    element.classList.remove('hidden');
    await transition('enter', element, transitionName);
};
/**
 * Transition an element exit
 *
 * @param element The element to leave
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
const leave = async (element, transitionName = null) => {
    await transition('leave', element, transitionName);
    element.classList.add('hidden');
};
/**
 * Toggle an element entry/exit
 *
 * @param element The element to toggle
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
const toggle = async (element, transitionName = null) => {
    if (element.classList.contains('hidden')) {
        await enter(element, transitionName);
    }
    else {
        await leave(element, transitionName);
    }
};
/**
 * Perform a transition on an element
 *
 * @param direction The direction of the transition
 * @param element The element to transition
 * @param animation The animation to use
 * @returns A promise that resolves when the transition is complete
 * @internal
 */
const transition = async (direction, element, animation) => {
    const { dataset } = element;
    const animationClass = animation ? `${animation}-${direction}` : direction;
    const transitionKey = `transition${direction.charAt(0).toUpperCase() + direction.slice(1)}`;
    // Get the genesis, start, and end classes
    const genesisClasses = getDatasetValueOrDefault(dataset, transitionKey, animationClass);
    const startClasses = getDatasetValueOrDefault(dataset, `${transitionKey}Start`, `${animationClass}-start`);
    const endClasses = getDatasetValueOrDefault(dataset, `${transitionKey}End`, `${animationClass}-end`);
    // Add genesis and start classes, then wait for the next frame
    addClasses(element, genesisClasses);
    addClasses(element, startClasses);
    await nextFrame();
    // Replace start classes with end classes, then wait for the transition to finish
    removeClasses(element, startClasses);
    addClasses(element, endClasses);
    await afterTransition(element);
    // Remove end and genesis classes
    removeClasses(element, endClasses);
    removeClasses(element, genesisClasses);
};
/**
 * Get the value of a dataset key or a default value
 *
 * @param dataset The dataset to get the value from
 * @param key The key to get the value for
 * @param defaultValue The default value to return if the key is not found
 * @returns The value of the dataset key or the default value
 * @internal
 */
const getDatasetValueOrDefault = (dataset, key, defaultValue) => {
    return dataset[key] ? dataset[key].split(' ') : [defaultValue];
};
/**
 * Add classes to an element
 *
 * @param element The element to add the CSS classes to
 * @param classes The classes to add
 * @internal
 */
const addClasses = (element, classes) => {
    element.classList.add(...classes);
};
/**
 * Remove classes from an element
 *
 * @param element The element to remove the CSS classes from
 * @param classes The classes to remove
 * @internal
 */
const removeClasses = (element, classes) => {
    element.classList.remove(...classes);
};
/**
 * Wait for the next frame
 * @returns A promise that resolves when the next frame is available
 * @internal
 */
const nextFrame = () => {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => resolve());
        });
    });
};
/**
 * Wait for all animations to finish
 * @param element The element to wait for
 * @returns A promise that resolves when all animations are finished
 * @internal
 */
const afterTransition = (element) => {
    return Promise.all(element.getAnimations().map((animation) => animation.finished));
};

exports.clamp = clamp;
exports.debounce = debounce;
exports.enter = enter;
exports.getBasePath = getBasePath;
exports.getCSSVariableValue = getCSSVariableValue;
exports.getColorCSSVariable = getColorCSSVariable;
exports.getInnerHTML = getInnerHTML;
exports.getNextElement = getNextElement;
exports.getRandomFromArray = getRandomFromArray;
exports.getTextContent = getTextContent;
exports.hasSlot = hasSlot;
exports.hasSlotContent = hasSlotContent;
exports.isClient = isClient;
exports.isDefined = isDefined;
exports.isEmpty = isEmpty;
exports.isEventTargetChildOfElement = isEventTargetChildOfElement;
exports.isHTMLElement = isHTMLElement;
exports.isNil = isNil;
exports.isString = isString;
exports.leave = leave;
exports.setBasePath = setBasePath;
exports.setRafTimeout = setRafTimeout;
exports.toggle = toggle;
exports.validatePropValue = validatePropValue;

//# sourceMappingURL=index-8c48e726.js.map