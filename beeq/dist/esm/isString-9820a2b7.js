/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
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

export { isString as i };

//# sourceMappingURL=isString-9820a2b7.js.map