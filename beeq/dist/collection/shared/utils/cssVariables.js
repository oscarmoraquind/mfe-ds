/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { isClient } from "./isClient";
const CSSVALUEPREFIX = '--bq-';
/**
 * Get CSS custom property variable of a given color string value
 *
 * @param {string} colorName - Valid string value.
 * @return {string} The corresponding CSS custom property variable
 */
export function getColorCSSVariable(colorName) {
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
export function getCSSVariableValue(variable, component) {
    const styles = getComputedStyle(component);
    return String(styles.getPropertyValue(`--${variable}`)).trim();
}
//# sourceMappingURL=cssVariables.js.map
