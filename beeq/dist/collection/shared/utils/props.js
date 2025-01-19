/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
/**
 * Validate the element property value, if is one of the accepted values
 *
 * @param {readonly} ACCEPTED_VALUES - The list of the accepted values to check against.
 * @param {unknown} fallbackValue - The default value to assign
 * @param {Element} element - The component reference
 * @param {string} propertyName - The property name (will be used in the console notification)
 * @returns {void}
 */
export const validatePropValue = (ACCEPTED_VALUES, fallbackValue, element, propertyName) => {
    const propertyValue = element[propertyName];
    // Early return if the property value is one of the accepted values
    if (ACCEPTED_VALUES.includes(propertyValue))
        return;
    // Override property with fallback value
    element[propertyName] = fallbackValue;
    // Notify developer in the browser console
    console.warn(`[${element.tagName.toUpperCase()}] Please notice that "${String(propertyName)}" should be one of ${ACCEPTED_VALUES.join('|')}`);
};
//# sourceMappingURL=props.js.map
