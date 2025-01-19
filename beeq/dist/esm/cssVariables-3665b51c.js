/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { i as isClient } from './isClient-c6eae7ba.js';

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

export { getCSSVariableValue as a, getColorCSSVariable as g };

//# sourceMappingURL=cssVariables-3665b51c.js.map