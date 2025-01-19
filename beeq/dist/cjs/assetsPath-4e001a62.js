/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

require('./index-1cbd3f9e.js');
const isClient = require('./isClient-c22372aa.js');

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
            setBasePath(`./${DEFAULT_SVG_PATH}`);
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
    if (!isClient.isClient())
        return null;
    return document.querySelector(`script[${DATA_BEEQ_ATTRIBUTE}]`);
};
/**
 * Finds the fallback script element.
 * @returns The fallback script element or null if not found.
 */
const findFallbackScript = () => {
    if (!isClient.isClient())
        return null;
    return document.querySelector(`script[src*="beeq"]`);
};
/**
 * Gets the path of a script element.
 * @param {HTMLScriptElement} script - The script element.
 * @returns The path of the script element.
 */
const getScriptPath = (script) => {
    if (!isClient.isClient())
        return '';
    const src = script.getAttribute('src');
    return src ? src.substring(0, src.lastIndexOf('/')) : '';
};

exports.getBasePath = getBasePath;
exports.setBasePath = setBasePath;

//# sourceMappingURL=assetsPath-4e001a62.js.map