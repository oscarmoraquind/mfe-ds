/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

const isClient = require('./isClient-c22372aa.js');

const CSSVALUEPREFIX = '--bq-';
/**
 * Get CSS custom property variable of a given color string value
 *
 * @param {string} colorName - Valid string value.
 * @return {string} The corresponding CSS custom property variable
 */
function getColorCSSVariable(colorName) {
    if (!isClient.isClient)
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

exports.getCSSVariableValue = getCSSVariableValue;
exports.getColorCSSVariable = getColorCSSVariable;

//# sourceMappingURL=cssVariables-55ad4942.js.map